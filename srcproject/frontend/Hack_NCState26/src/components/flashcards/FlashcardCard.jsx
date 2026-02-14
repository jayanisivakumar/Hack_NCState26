export default function FlashcardCard({ card, onDelete }) {
  return (
    <div className="w-full max-w-4xl bg-white rounded-xl p-6 border shadow-sm">

      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500">Front</p>
          <p className="text-lg font-semibold">{card.front}</p>
        </div>

        <div className="flex gap-4">
          <button>✏️</button>
          <button
            onClick={onDelete}
            className="text-red-500"
          >
            🗑
          </button>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-gray-500">Back</p>
        <p>{card.back}</p>
      </div>

    </div>
  );
}
