from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from schemas.folder_schema import FolderCreate, FolderResponse
from db.database import get_db
from db.models import Folder


router = APIRouter(prefix="/folders", tags=["Folders"])

@router.post("/", response_model=FolderResponse)
def create_folder(folder: FolderCreate, db: Session = Depends(get_db)):
    new_folder = Folder(folder_name = folder.name, user_id=1)

    db.add(new_folder)
    db.commit()
    db.refresh(new_folder)
    return {"id": new_folder.folder_id, "name": new_folder.folder_name}

@router.get("/", response_model=list[FolderResponse])
def get_folders(db: Session = Depends(get_db)):
    folders = db.query(Folder).all()

    return [
        {"id": f.folder_id,"name": f.folder_name}
        for f in folders
    ]