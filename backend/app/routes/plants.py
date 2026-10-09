
from uuid import UUID

from fastapi import APIRouter, Depends, HTTPException, Response, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.plant import Plant
from app.schemas.plant import PlantResponse, PlantCreate, PlantUpdate

router = APIRouter(
    prefix="/plants",
    tags=["Plants"],
)


# CREATE - Add a new plant
@router.post("/", response_model=PlantResponse, status_code=status.HTTP_201_CREATED)
def create_plant(data: PlantCreate, db: Session = Depends(get_db)):
    plant = Plant(**data.model_dump())

    try:
        db.add(plant)
        db.commit()
        db.refresh(plant)
        return plant
    except Exception:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to create plant",
        )


# READ - Get all plants
@router.get("/", response_model=list[PlantResponse])
def get_plants(db: Session = Depends(get_db)):
    return db.query(Plant).order_by(Plant.created_at.desc()).all()


# READ - Get one plant by UUID
@router.get("/{plant_id}", response_model=PlantResponse)
def get_plant(plant_id: UUID, db: Session = Depends(get_db)):
    plant = db.query(Plant).filter(Plant.plant_id == plant_id).first()

    if plant is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Plant not found",
        )

    return plant


# UPDATE - Update a plant by UUID
@router.put("/{plant_id}", response_model=PlantResponse)
def update_plant(
    plant_id: UUID,
    data: PlantUpdate,
    db: Session = Depends(get_db),
):
    plant = db.query(Plant).filter(Plant.plant_id == plant_id).first()

    if plant is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Plant not found",
        )

    updates = data.model_dump(exclude_unset=True)
    for field, value in updates.items():
        setattr(plant, field, value)

    try:
        db.commit()
        db.refresh(plant)
        return plant
    except Exception:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to update plant",
        )


# DELETE - Delete a plant by UUID
@router.delete("/{plant_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_plant(plant_id: UUID, db: Session = Depends(get_db)):
    plant = db.query(Plant).filter(Plant.plant_id == plant_id).first()

    if plant is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Plant not found",
        )

    try:
        db.delete(plant)
        db.commit()
    except Exception:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Cannot delete plant. It may be referenced by other records.",
        )

    return Response(status_code=status.HTTP_204_NO_CONTENT)
