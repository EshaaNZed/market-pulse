from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for frontend development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health_check():
    return {"status": "ok"}

@app.get("/api/v1/market-pulse")
async def get_market_pulse(ticker: str):
    # Your implementation will go here
    return {
        "ticker": ticker,
        "pulse": "neutral",
        "message": "Endpoint working - implementation pending"
    }