from fastapi import APIRouter
from schemas.folder_schema import FolderCreate

router = APIRouter(prefix="/folders", tags=["Folders"])

@router.post("/")
def create_folder(folder: FolderCreate):
    return {"id": 1, "name": folder.name}

@router.get("/")
def get_folders():
    return []