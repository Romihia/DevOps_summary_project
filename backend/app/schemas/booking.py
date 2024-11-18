from pydantic import BaseModel
from datetime import datetime

class BookingCreate(BaseModel):
    flight_id: int

class Booking(BookingCreate):
    id: int
    user_id: int
    booking_time: datetime
    status: str

    class Config:
        orm_mode = True
