
from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI
from api import routes_notes, routes_folders

app = FastAPI()

app.include_router(routes_folders.router)
app.include_router(routes_notes.router)

