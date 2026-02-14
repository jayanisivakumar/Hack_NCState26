from fastapi import APIRouter
from schemas.note_schema import NoteCreate
from services.ai_service import generate_flashcards

router = APIRouter(prefix="/notes", tags=["Notes"])

@router.post("/")
def create_note(note: NoteCreate):

    # Simulate saving note (we add DB later)
    note_id = 1  # temporary mock ID

    # Generate AI flashcards
    flashcards = generate_flashcards(note.content)

    return {
        "note": {
            "id": note_id,
            "folder_id": note.folder_id,
            "title": note.title
        },
        "flashcards": flashcards
    }
