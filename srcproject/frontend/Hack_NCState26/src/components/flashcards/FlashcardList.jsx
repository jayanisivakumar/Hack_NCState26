import FlashcardCard from "./FlashcardCard";
import EmptyFlashcards from "./EmptyFlashcards"

export default function FlashCardList({ flashcards, setFlashCards}) {
      const handleDelete = (id) => {
        setFlashCards(flashcards.filter(card => card.id !== id));
      };

      if(flashcards.length == 0){
        return <EmptyFlashcards />;
      }

  return (
    <>
      <button className="w-full max-w-4xl border rounded-lg py-3 text-lg">
        + Add New Flashcard
      </button>
      { flashcards.map((card) => (
        <FlashcardCard 
        key={card.id}
        card={card}
        onDelete={() => handleDelete(card.id)}
        />
       )
      )
    }
    </>

  )
}