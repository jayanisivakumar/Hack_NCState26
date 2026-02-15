import { useState } from "react";

export default function AddFlashcardForm({ onAdd, onCancel }) {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSubmit = () => {
    if (!term.trim() || !definition.trim()) return;

    onAdd({
      id: crypto.randomUUID(),
      term,
      definition,
    });

    setTerm("");
    setDefinition("");
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-xl p-6 border shadow-sm">

  {/* Front */}
  <div className="mb-4">
    <p className="text-gray-500 mb-1">Front</p>
    <textarea
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      rows={2}
      placeholder="Enter term..."
      className="w-full bg-gray-100 rounded-lg p-3 text-base 
                 border border-gray-300 
                 focus:outline-none 
                 focus:border-purple-500 
                 focus:ring-4 focus:ring-purple-200 
                 transition-all duration-300 ease-out"
    />
  </div>

  {/* Back */}
  <div className="mb-6">
    <p className="text-gray-500 mb-1">Back</p>
    <textarea
      value={definition}
      onChange={(e) => setDefinition(e.target.value)}
      rows={3}
      placeholder="Enter definition..."
      className="w-full bg-gray-100 rounded-lg p-3 text-base 
                 border border-gray-300 
                 focus:outline-none 
                 focus:border-purple-500 
                 focus:ring-4 focus:ring-purple-200 
                 transition-all duration-300 ease-out"
    />
  </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleSubmit}
          className="px-5 py-2 rounded-lg bg-[#0B0C2A] text-white text-sm font-medium hover:opacity-90 transition cursor-pointer"
        >
          + Add
        </button>

        <button
          onClick={onCancel}
          className="px-5 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100 transition cursor-pointer"
        >
          Cancel
        </button>
      </div>

    </div>
  );
}
