from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app.schemas.flight import Flight
from app.schemas.booking import Booking, BookingCreate
from app.services.flight_service import get_flights, create_booking, cancel_flight_booking
from app.db import get_db

router = APIRouter()

@router.get("/flights", response_model=List[Flight])
def get_all_flights(db: Session = Depends(get_db)):
    return get_flights(db)

@router.post("/book", response_model=Booking)
def book_flight(booking: BookingCreate, db: Session = Depends(get_db)):
    return create_booking(db=db, booking=booking)

@router.delete("/cancel/{booking_id}", response_model=Booking)
def cancel_booking(booking_id: int, db: Session = Depends(get_db)):
    booking = cancel_flight_booking(db=db, booking_id=booking_id)
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    return booking
