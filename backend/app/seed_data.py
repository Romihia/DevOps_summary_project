from sqlalchemy.orm import Session
from db import SessionLocal
from models.flight import Flight
from datetime import datetime, timedelta
import random

DESTINATIONS = ["New York", "London", "Paris", "Tokyo"]

def seed_flights(db: Session):
    if db.query(Flight).count() > 0:
        print("Flights already seeded.")
        return

    flights_data = []
    for i, origin in enumerate(DESTINATIONS):
        for j, destination in enumerate(DESTINATIONS):
            if i != j:
                flight_number = f"{origin[:3]}-{destination[:3]}-{random.randint(100, 999)}"
                departure_time = datetime.now() + timedelta(days=random.randint(1, 5))
                arrival_time = departure_time + timedelta(hours=random.randint(1, 10))
                flight_data = Flight(
                    flight_number=flight_number,
                    origin=origin,
                    destination=destination,
                    departure_time=departure_time,
                    arrival_time=arrival_time,
                    price=random.randint(100, 500)
                )
                flights_data.append(flight_data)

    db.add_all(flights_data)
    db.commit()
    print(f"{len(flights_data)} flights inserted successfully.")

def main():
    db = SessionLocal()
    try:
        seed_flights(db)
    finally:
        db.close()

if __name__ == "__main__":
    main()
