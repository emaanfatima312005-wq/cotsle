from fastapi import FastAPI
from sqlalchemy import text

from app.database import engine

app = FastAPI(
    title="COTSLE API",
    version="1.0.0"
)


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