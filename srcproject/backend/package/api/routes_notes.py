from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
# import os
# os.chdir("..")
from db.database import get_db
from db.models import Note, Flashcard
from schemas.note_schema import NoteCreate
from services.ai_service import generate_flashcards

router = APIRouter(prefix="/notes", tags=["Notes"])

@router.post("/")
def create_note(note: NoteCreate, db: Session = Depends(get_db)):

    new_note = Note(
        folder_id=note.folder_id,
        name=note.title,
        notes=note.content
    )

    db.add(new_note)
    db.commit()
    db.refresh(new_note)

    # Generate AI flashcards
    flashcards_data = generate_flashcards(note.content)

    created_flashcards = []

    for fc in flashcards_data:
        new_fc = Flashcard(
            note_id=new_note.note_id,
            term=fc["term"],
            definition=fc["definition"]
        )
        db.add(new_fc)
        created_flashcards.append(new_fc)

    db.commit()

    return {
        "note": {
            "id": new_note.note_id,
            "folder_id": new_note.folder_id,
            "title": new_note.name
        },
        "flashcards": flashcards_data
    }
