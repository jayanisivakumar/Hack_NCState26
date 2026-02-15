import { useState } from "react";

export default function NotesEditor({
  flashcards,
  setFlashcards
}) {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    const updatedContent = e.target.value;
    setContent(updatedContent);

    const regex = /\|\|(.*?)\|\|:\((.*?)\)/g;
    const matches = [...updatedContent.matchAll(regex)];

    matches.forEach(match => {
      const term = match[1].trim();
      const definition = match[2].trim();

      const alreadyExists = flashcards.some(
        card => card.term === term && card.definition === definition
      );

      if (!alreadyExists) {
        setFlashcards(prev => [
          ...prev,
          {
            id: crypto.randomUUID(),
            term,
            definition
          }
        ]);
      }
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-start px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-8 h-200">
        <h2 className="text-2xl mb-2">Notes Editor</h2>
        <p className="text-gray-500 mb-5">
          Write your notes naturally. Use{" "}
          <span className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">
            ||term||:(definition)
          </span>{" "}
          to create flashcards.
        </p>

        <textarea
          className="w-full min-h-[400px] p-4 border border-gray-300 rounded-lg 
             focus:outline-none 
             focus:border-purple-500 
             focus:ring-4 focus:ring-purple-200 
             transition-all duration-300 ease-out"
          placeholder="Start typing your notes here..."
          value={content}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
