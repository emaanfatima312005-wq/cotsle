from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text
from app.database import Base, engine
import app.models
from app.database import engine
from app.routes import contact
from app.routes import systems_ai
from app.routes import networks_ai
from app.routes import consulting_ai

Base.metadata.create_all(bind=engine)
app = FastAPI(
    title="COTSLE API",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(contact.router)
app.include_router(systems_ai.router)
app.include_router(networks_ai.router)
app.include_router(consulting_ai.router)


@app.get("/")
def home():
    return {
        "message": "COTSLE backend is running 🚀"
    }


@app.get("/db-test")
def database_test():
    try:
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))

        return {
            "database": "Connected successfully ✅"
        }

    except Exception as e:
        return {
            "error": str(e)
        }