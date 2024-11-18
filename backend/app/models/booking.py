from sqlalchemy import Column, Integer, ForeignKey, DateTime, String
from sqlalchemy.orm import relationship
from app.db import Base

class Booking(Base):
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer)
    flight_id = Column(Integer, ForeignKey("flights.id"))
    booking_time = Column(DateTime)
    status = Column(String, default="booked")

    flight = relationship("Flight")
