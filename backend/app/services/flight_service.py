from sqlalchemy.orm import Session
from app.models.booking import Booking
from app.models.flight import Flight
from app.schemas.booking import BookingCreate
from datetime import datetime

def get_flights(db: Session):
    return db.query(Flight).all()

def create_booking(db: Session, booking: BookingCreate):
    db_booking = Booking(
        user_id=1,  # Assume you're the only user
        flight_id=booking.flight_id,
        booking_time=datetime.now()
    )
    db.add(db_booking)
    db.commit()
    db.refresh(db_booking)
    return db_booking

def cancel_booking(db: Session, booking_id: int):
    db_booking = db.query(Booking).filter(Booking.id == booking_id).first()
    if db_booking:
        db_booking.status = "cancelled"
        db.commit()
        db.refresh(db_booking)
    return db_booking
