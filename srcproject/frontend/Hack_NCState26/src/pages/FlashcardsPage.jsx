import FlashcardList from "../components/flashcards/FlashCardList";
import AddFlashCardForm from "../components/flashcards/AddFlashcardForm";
import { useState } from "react";

export default function FlashCardsPage({ flashcards, setFlashCards }) {
  const [showAddForm, setShowAddForm] = useState(false);

  const addCard = (newCard) => {
    setFlashCards([...flashcards, newCard]);
    setShowAddForm(false);
  };


  return (
  <div className="flex flex-col items-center gap-6 w-full">
    
    <button
      onClick={() => setShowAddForm(true)}
      className="px-8 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition-all duration-200 cursor-pointer w-4/5 max-w-4xl"
    >
      + Add New Flashcard
    </button>

    {showAddForm && (
      <AddFlashCardForm 
        onAdd={addCard}
        onCancel={() => setShowAddForm(false)}
      />
    )}

    {!showAddForm && (
      flashcards.length === 0 ? (
        <div className="w-full max-w-4xl bg-white rounded-xl p-12 text-center shadow-sm border border-gray-300">
          <p className="text-lg text-gray-500">
            No flashcards yet
          </p>
        </div>
      ) : (
        <FlashcardList
          flashcards={flashcards} 
          setFlashCards={setFlashCards}
        />
      )
    )}

  </div>
);

}