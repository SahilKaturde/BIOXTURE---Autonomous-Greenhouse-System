
import uuid

from sqlalchemy import Column, String, Text, DateTime, func
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class Plant(Base):
    __tablename__ = "plants"

    plant_id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4,
    )

    common_name = Column(String(100), nullable=False)
    scientific_name = Column(String(150))
    plant_family = Column(String(100))
    description = Column(Text)
    plant_image = Column(Text)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )
