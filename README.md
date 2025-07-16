# 📈 Market Pulse

Market Pulse is a full-stack stock sentiment analysis microservice that fetches real-time stock data, extracts news, calculates momentum, and provides AI-generated insights via an LLM. It features a FastAPI backend and a React (TypeScript) frontend.

## 🛠 Tech Stack

* **Backend**: FastAPI, Python, HTTPX
* **Frontend**: React + TypeScript
* **Others**: Uvicorn (ASGI server), Docker (optional), Git

---

## 🔍 Features

* Get stock market momentum data based on price movements
* Pull latest news articles (planned)
* Use an LLM (Large Language Model) to generate financial analysis (planned)
* React frontend for user interaction and result display
* CORS-enabled backend API for cross-origin communication

---

## 📁 Project Structure

```
market-pulse/
│
├── backend/
│   ├── app/
│   │   ├── main.py         # FastAPI app and routes
│   │   ├── services.py     # Utility functions (fetching price, momentum, etc.)
│   │   ├── schemas.py      # (Optional) Pydantic models for API
│   ├── tests/              # Backend tests
│   ├── requirements.txt    # Backend dependencies
│   └── Dockerfile          # Docker setup (optional)
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── MarketPulse.tsx   # React component fetching & displaying data
│   └── package.json        # Frontend dependencies
│
├── docker-compose.yml      # (Optional) Multi-container setup
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 🔧 Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate         # On Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 💻 Frontend

```bash
cd frontend
npm install
npm start
```

Open `http://localhost:3000` to use the app.

---

## 📡 API Endpoint

`GET /api/v1/market-pulse?ticker=AAPL`

Returns:

```json
{
  "ticker": "AAPL",
  "as_of": "2025-07-16",
  "momentum": {
    "returns": 0.042,
    "score": "positive"
  },
  "news": [],
  "pulse": "TBD",
  "llm_explanation": "LLM not yet implemented"
}
```

---

## 🧠 TODO

* [ ] Integrate real-time news API
* [ ] Hook up to LLM API (e.g., OpenAI, Claude)
* [ ] Dockerize for deployment
* [ ] Add unit tests
* [ ] UI polish with loading/error states

