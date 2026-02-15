import { useState, useEffect } from "react";

export default function EditFlashcardForm({ card, onSave, onCancel }) {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");

  useEffect(() => {
    if (card) {
      setTerm(card.term);
      setDefinition(card.definition);
    }
  }, [card]);

  const handleSave = () => {
    if (!term.trim() || !definition.trim()) return;

    onSave({
      ...card,
      term,
      definition,
    });
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-xl p-6 border shadow-sm">

      {/* Front */}
      <div className="mb-4">
        <p className="text-gray-500 mb-1">Front</p>
        <textarea
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="w-full bg-gray-100 rounded-lg p-3 text-base focus:outline-none"
          rows={2}
        />
      </div>

      {/* term */}
      <div className="mb-6">
        <p className="text-gray-500 mb-1">Back</p>
        <textarea
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
          className="w-full bg-gray-100 rounded-lg p-3 text-base focus:outline-none"
          rows={3}
        />
      </div>

      {/* buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleSave}
          className="px-5 py-2 rounded-lg bg-[#0B0C2A] text-white text-sm font-medium hover:opacity-90 transition cursor-pointer"
        >
          ✓ Save
        </button>

        <button
          onClick={onCancel}
          className="px-5 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100 transition cursor-pointer"
        >
          ✕ Cancel
        </button>
      </div>

    </div>
  );
}
