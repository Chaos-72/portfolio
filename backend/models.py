from sqlalchemy import Column, Integer, String, DateTime
from pydantic import BaseModel
from datetime import datetime
from backend.database import Base

# SQLAlchemy Model
class ContactMessage(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, index=True)
    message = Column(String)
    timestamp = Column(DateTime, default=datetime.utcnow)

# Pydantic Schemas
class MessageCreate(BaseModel):
    name: str
    email: str
    message: str

class MessageResponse(MessageCreate):
    id: int
    timestamp: datetime

    class Config:
        from_attributes = True
