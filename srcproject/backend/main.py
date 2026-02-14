from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class NotesRequest(BaseModel):
    notes: str

@app.post("/generate")
async def generate_flashcards(data: NotesRequest):
    return {"message": "Backend working"}