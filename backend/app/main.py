from fastapi import FastAPI
from app.api import endpoints
from app.db import Base, engine
from app import models

app = FastAPI()

# Create database tables
Base.metadata.create_all(bind=engine)

app.include_router(endpoints.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Flight Booking API!"}
