from sqlalchemy import Column, Integer, String, Text, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False)
    password = Column(String, nullable=False)
    email = Column(String, nullable=False, unique=True)

    folders = relationship("Folder", back_populates="user", cascade="all, delete-orphan")


class Folder(Base):
    __tablename__ = "folder"

    folder_id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    folder_name = Column(String, nullable=False)

    user = relationship("User", back_populates="folders")
    notes = relationship("Note", back_populates="folder", cascade="all, delete-orphan")


class Note(Base):
    __tablename__ = "note"

    note_id = Column(Integer, primary_key=True)
    folder_id = Column(Integer, ForeignKey("folder.folder_id", ondelete="CASCADE"), nullable=False)
    name = Column(String, nullable=False)
    notes = Column(Text, nullable=False)

    folder = relationship("Folder", back_populates="notes")
    flashcards = relationship("Flashcard", back_populates="note", cascade="all, delete-orphan")


class Flashcard(Base):
    __tablename__ = "flashcard"

    flashcard_id = Column(Integer, primary_key=True)
    note_id = Column(Integer, ForeignKey("note.note_id", ondelete="CASCADE"), nullable=False)
    term = Column(String, nullable=False)
    definition = Column(Text, nullable=False)
    user_generated = Column(Boolean, default=False)

    note = relationship("Note", back_populates="flashcards")