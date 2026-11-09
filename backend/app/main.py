from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="CondoWatch API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/api/v1/financial-summary")
def financial_summary():
    return {
        "currency": "SGD",
        "financialYear": 2026,
        "totalIncome": 1200000,
        "totalExpenses": 980000,
        "categories": [
            {"name": "Security", "amount": 340000},
            {"name": "Cleaning", "amount": 220000},
            {"name": "Maintenance", "amount": 180000},
            {"name": "Management", "amount": 120000},
            {"name": "Others", "amount": 120000}
        ],
        "dataStatus": "DEMO"
    }
