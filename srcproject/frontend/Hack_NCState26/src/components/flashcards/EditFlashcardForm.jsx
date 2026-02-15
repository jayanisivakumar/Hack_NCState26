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

    {/* Term */}
    <div className="mb-4">
      <p className="text-gray-500 mb-1">Term</p>
      <textarea
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        rows={2}
        className="w-full bg-gray-100 rounded-lg p-3 text-base 
                  border border-gray-300 
                  focus:outline-none 
                  focus:border-purple-500 
                  focus:ring-4 focus:ring-purple-200 
                  transition-all duration-300 ease-out"
      />
    </div>

    {/* Definition */}
    <div className="mb-6">
      <p className="text-gray-500 mb-1">Definition</p>
      <textarea
        value={definition}
        onChange={(e) => setDefinition(e.target.value)}
        rows={3}
        className="w-full bg-gray-100 rounded-lg p-3 text-base 
                  border border-gray-300 
                  focus:outline-none 
                  focus:border-purple-500 
                  focus:ring-4 focus:ring-purple-200 
                  transition-all duration-300 ease-out"
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
