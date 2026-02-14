from typing import List

class FlashCard:
    def __init__(self, term: str, definition: str, fcId: int):
        self._term = term
        self._definition = definition
        self._fcId = fcId

    # Getters
    def get_term(self) -> str:
        return self._term

    def get_definition(self) -> str:
        return self._definition

    def get_fcId(self) -> int:
        return self._fcId

    # Setters
    def set_term(self, term: str):
        self._term = term

    def set_definition(self, definition: str):
        self._definition = definition

    def set_fcId(self, fcId: int):
        self._fcId = fcId

class Note:
    def __init__(self, name: str, note: str, noteId: int):
        self._name = name
        self._note = note
        self._noteId = noteId

    # Getters
    def get_name(self) -> str:
        return self._name

    def get_note(self) -> str:
        return self._note

    def get_noteId(self) -> int:
        return self._noteId

    # Setters
    def set_name(self, name: str):
        self._name = name

    def set_note(self, note: str):
        self._note = note

    def set_noteId(self, noteId: int):
        self._noteId = noteId


class Folder:
    def __init__(self, folderId: int, folderName, flashcards: List[FlashCard] = [], notes: List[Note] = []):
        self._folderId = folderId
        self._flashcards = flashcards
        self._notes = notes
        self._folderName = folderName; 
    # Getters
    def get_folderId(self) -> int:
        return self._folderId

    def get_flashcards(self) -> List[FlashCard]:
        return self._flashcards

    def get_notes(self) -> List[Note]:
        return self._notes

    def get_folderName(self) -> str: 
        return self._folderName 
    # Setters
    def set_folderId(self, folderId: int):
        self._folderId = folderId

    def set_folderName(self, folderName:str): 
        self._folderName = folderName
    # def set_flashcards(self, flashcards: List[FlashCard]):
    #     self._flashcards = flashcards

    # def set_notes(self, notes: List[Note]):
    #     self._notes = notes

    # Convenience methods
    def add_flashcard(self, flashcard: FlashCard):
        self._flashcards.append(flashcard)

    def add_note(self, note: Note):
        self._notes.append(note)

    def remove_flashcard(self, flashcard: FlashCard):
        self._flashcards.remove(flashcard)

    def remove_note(self, note: Note): 
        self._notes.remove(note)
