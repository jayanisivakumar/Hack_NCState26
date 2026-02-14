export default function EmptyFlashcards( {onAdd}) {
  return (
    <div className="w-full max-w-4xl bg-white rounded-xl p-12 text-center shadow-sm border border-gray-300 flex flex-col gap-10 items-center">
      <button onClick={onAdd}
        className="px-8 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition-all duration-200 cursor-pointer w-4/5">
        + Add New Flashcard
      </button>
      <p className="text-lg text-gray-500">
        No flashcards yet
      </p>
    </div>
  );
}
