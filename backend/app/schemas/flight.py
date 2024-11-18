from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional

class Flight(BaseModel):
    id: int
    flight_number: str
    origin: str
    destination: str
    departure_time: datetime
    arrival_time: datetime
    price: float

    class Config:
        orm_mode = True
