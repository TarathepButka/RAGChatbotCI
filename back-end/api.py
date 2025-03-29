from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware  # Import CORSMiddleware
import query_data as qd

# Initialize FastAPI app
app = FastAPI()

# Allow all origins for testing (you can change this to specific origins)
origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://127.0.0.1",
    ""
]

# Add CORSMiddleware to handle OPTIONS requests and CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define request model
class Query(BaseModel):
    question: str  # Expects "question" as the field name

@app.post("/ask")
def receive_query(query: Query):
    # ✅ ใช้ query.question ให้ตรงกับ Model
    return {"reply": f"{qd.query_rag(query.question)}"}

# Run the API
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
