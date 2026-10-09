
from datetime import datetime
from uuid import UUID

from pydantic import BaseModel, ConfigDict, Field


class PlantCreate(BaseModel):
    common_name: str = Field(min_length=1, max_length=100)
    scientific_name: str | None = None
    plant_family: str | None = None
    description: str | None = None
    plant_image: str | None = None


class PlantUpdate(BaseModel):
    common_name: str | None = Field(default=None, min_length=1, max_length=100)
    scientific_name: str | None = None
    plant_family: str | None = None
    description: str | None = None
    plant_image: str | None = None


class PlantResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    plant_id: UUID
    common_name: str
    scientific_name: str | None = None
    plant_family: str | None = None
    description: str | None = None
    plant_image: str | None = None
    created_at: datetime
    updated_at: datetime
