import { useState } from 'react'
import NotesEditor from '../components/editor/NotesEditor'
import FlashcardsPage from './FlashcardsPage'
import AIToolsPage from './AIToolsPage'


export default function EditorPage() {
  const [activeTab, setActiveTab] = useState("editor");

  const [content, setContent] = useState('');
  const [flashcards, setFlashcards] = useState([]);

  return (
    <>
      <div className=" py-7 flex justify-center">
        <div className="bg-[#ECECF0] rounded-full p-1 flex">
          <button onClick={() => setActiveTab("editor")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-200 cursor-pointer ${activeTab == "editor" ? "bg-white shadow text-black" : "text-gray-600 hover:text-black"}`}>Editor</button>
          <button onClick={() => setActiveTab("flashcards")} 
          className={`px-6 py-2 rounded-full transition-all duration-200 cursor-pointer ${activeTab == "flashcards" ? "bg-white shadow text-black" : "text-gray-600 hover:text-black"}`}>Flashcards</button>
          <button onClick={() => setActiveTab("ai")} 
          className={`px-6 py-2 rounded-full transition-all duration-200 cursor-pointer ${activeTab == "ai" ? "bg-white shadow text-black" : "text-gray-600 hover:text-black"}`}>AI Tools</button>
        </div>
      </div>

      {/* conditional rendering based on active tab */}
      {activeTab == "editor" && (
        <NotesEditor content={content} setContent={setContent}/>
      )}
      {activeTab == "flashcards" && (
        <FlashcardsPage flashcards={flashcards} setFlashcards={setFlashcards} />
      )}
      {activeTab == "ai" && (
        <AIToolsPage />
      )}
    </>
  )
}