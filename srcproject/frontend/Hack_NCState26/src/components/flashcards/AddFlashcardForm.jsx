import { useState } from "react";

export default function AddFlashcardForm( {onAdd, onCancel}){
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSubmit = () => {
    if(!term.trim() || !definition.trim()) {
      return;
    }

    onAdd({
      id: crypto.randomUUID(),
      term,
      definition
    });

    setTerm("");
    setDefinition("");
  }
  return (
    <>
      <div className="w-full max-w-4xl bg-white rounded-2xl p-8 border border-gray-300 shadow-sm flex flex-col gap-6">
        {/* Term input */}
        <div>
          <label className="block text-gray-500 mb-1">Term</label>
          <input 
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeHolder="Enter term"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* definition input */}
        <div>
          <label className="block text-gray-500 mb-1">Definition</label>
          <textarea 
            value={definition}
            onChange={(e) => setDefinition(e.target.value)}
            placeHolder="Enter definition"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* buttons */}
        <div className="flex gap-4 mt-4">
          <button onClick={handleSubmit} 
            className="px-6 py-3 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition-all duration-200 cursor-pointer"> 
            + Add Card 
          </button>

          <button onClick={onCancel}
            className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all duration-200 cursor-pointer"> 
            Cancel
          </button>
        </div>
      </div>
    </>

  )
}