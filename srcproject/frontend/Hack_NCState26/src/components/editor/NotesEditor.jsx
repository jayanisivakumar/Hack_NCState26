import { useState } from 'react'

export default function NotesEditor() {
  const [content, setContent] = useState('');

  const regex = /\|\|(.*?)\|\|:\((.*?)\)/g;
  const matches = [...content.matchAll(regex)];

  const flashcards = matches.map(match => ({
    term: match[1],
    definition: match[2]
  }));
return (
  <div className="min-h-screen flex justify-center items-start px-4">
    <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-8">
      <h2 className="text-2xl mb-2">Notes Editor</h2>
      <p
      className="text-gray-500 mb-5">Write your notes naturally. Use{" "}
      <span className="bg-gray-200 px-2 py-1 rounded text-sm font-mono ">
        ||term||:(definition)
        </span>{" "} to create flashcards. 
      </p>

      <textarea
      className="w-full h-150 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-6"
      placeholder="Start typing your notes here..."
      value={content}
      onChange={(e) => setContent(e.target.value)}
      />
    </div>
  </div>
);
}
