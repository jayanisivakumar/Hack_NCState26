from sqlalchemy import create_engine, Column, String, Integer, Text, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from sqlalchemy.exc import IntegrityError
from dotenv import load_dotenv
import os

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(DATABASE_URL)
Base = declarative_base()
Session = sessionmaker(bind=engine)
session = Session()

# Models
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False)
    password = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)
    folders = relationship('Folder', back_populates='users', cascade="all, delete-orphan")

class Folder(Base):
    __tablename__ = "folder"
    folder_id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id', ondelete="CASCADE"))
    folder_name = Column(String, nullable=False)
    user = relationship('User', back_populates='folder')
    notes = relationship('Note', back_populates='folder', cascade="all, delete-orphan")

class Note(Base):
    __tablename__ = "note"
    note_id = Column(Integer, primary_key=True)
    folder_id = Column(Integer, ForeignKey('folder.folder_id', ondelete="CASCADE"))
    name = Column(String, nullable=False)
    notes = Column(Text, nullable=False)
    folder = relationship('Folder', back_populates='note')
    flashcards = relationship('Flashcard', back_populates='note', cascade="all, delete-orphan")

class Flashcard(Base):
    __tablename__ = "flashcard"
    flashcard_id = Column(Integer, primary_key=True)
    note_id = Column(Integer, ForeignKey('note.note_id', ondelete="CASCADE"))
    term = Column(String, nullable=False)
    definition = Column(Text, nullable=False)
    note = relationship('Note', back_populates='flashcard')

Base.metadata.create_all(engine)