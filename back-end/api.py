from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware  # Import CORSMiddleware
import query_data as qd

# Initialize FastAPI app
app = FastAPI()

# Allow all origins for testing (you can change this to specific origins)
origins = [
    "http://localhost",  # Local development
    "http://localhost:3000",  # If you are using a frontend on port 3000 (e.g., React)
    "http://127.0.0.1",  # Localhost
]

# Add CORSMiddleware to handle OPTIONS requests and CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # You can specify specific origins here
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Define request model
class Query(BaseModel):
    question: str  # Expects "question" as the field name

@app.post("/ask")
def receive_query(query: Query):
    # Change from query.message to query.question
    return {"reply": f"{qd.query_rag(query.question)}"}

# Run the API
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)