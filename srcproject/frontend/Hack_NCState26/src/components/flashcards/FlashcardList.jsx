import { useState } from "react";
import FlashcardCard from "./FlashcardCard";
import EditFlashcardForm from "./EditFlashcardForm";

export default function FlashCardList({ flashcards, setFlashcards }) {

  const [editingId, setEditingId] = useState(null);

  const handleDelete = (id) => {
    setFlashcards(flashcards.filter(card => card.id !== id));
  };

  const handleEditSave = (updatedCard) => {
    setFlashcards(
      flashcards.map(card =>
        card.id === updatedCard.id ? updatedCard : card
      )
    );
    setEditingId(null);
  };

  return (
    <>
      {flashcards.map((card) =>
        editingId === card.id ? (
          <EditFlashcardForm
            key={card.id}
            card={card}
            onSave={handleEditSave}
            onCancel={() => setEditingId(null)}
          />
        ) : (
          <FlashcardCard
            key={card.id}
            card={card}
            onDelete={() => handleDelete(card.id)}
            onEdit={() => setEditingId(card.id)}
          />
        )
      )}
    </>
  );
}
