from pydantic import BaseModel
from typing import List

class NoteCreate(BaseModel):
    folder_id: int
    title: str
    content: str

class Flashcard(BaseModel):
    term: str
    definition: str

class NoteResponse(BaseModel):
    id: int
    folder_id: int
    title: str

class NoteWithFlashcards(BaseModel):
    note: NoteResponse
    flashcards: List[Flashcard]
