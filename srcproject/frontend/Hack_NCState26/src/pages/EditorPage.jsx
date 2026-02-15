import { useState } from "react";
import NotesEditor from "../components/editor/NotesEditor";
import FlashcardsPage from "./FlashcardsPage";
import AIToolsPage from "./AIToolsPage";
import Sidebar from "../components/layout/Sidebar";

export default function EditorPage() {
  const [activeTab, setActiveTab] = useState("editor");

  const [flashcards, setFlashcards] = useState([]);

  const [notes, setNotes] = useState({
    Biology: [
      { id: 1, title: "Cell Biology Basics", content: "" },
      { id: 2, title: "DNA Structure", content: "" },
    ],
    Chemistry: [],
    History: [],
  });

  const [selectedNote, setSelectedNote] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-[calc(100vh-80px)]">

      {/* Sidebar */}
      <Sidebar
        notes={notes}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col transition-all duration-300">

      {/* Tabs */}
      <div className="py-6 flex justify-center">
        <div className="relative bg-[#ECECF0] rounded-full p-1 flex w-[420px]">

          {/* Sliding White Background */}
          <div
            className={`absolute top-1 bottom-1 left-1 rounded-full bg-white shadow transition-transform duration-300 ease-in-out w-[calc((100%-8px)/3)] ${
              activeTab === "editor"
                ? "translate-x-0"
                : activeTab === "flashcards"
                ? "translate-x-full"
                : "translate-x-[200%]"
            }`}
          />

          {/* Editor */}
          <button
            onClick={() => setActiveTab("editor")}
            className={`flex-1 relative z-10 py-2 text-center transition-colors duration-300 cursor-pointer ${
              activeTab === "editor"
                ? "text-black"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Editor
          </button>

          {/* Flashcards */}
          <button
            onClick={() => setActiveTab("flashcards")}
            className={`flex-1 relative z-10 py-2 text-center transition-colors duration-300 cursor-pointer ${
              activeTab === "flashcards"
                ? "text-black"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Flashcards
          </button>

          {/* AI Tools */}
          <button
            onClick={() => setActiveTab("ai")}
            className={`flex-1 relative z-10 py-2 text-center transition-colors duration-300 cursor-pointer ${
              activeTab === "ai"
                ? "text-black"
                : "text-gray-600 hover:text-black"
            }`}
          >
            AI Tools
          </button>

        </div>
      </div>


        {/* Animated Content Area */}
        <div className="flex-1 overflow-hidden relative p-6">

          <div
            key={activeTab}
            className="absolute inset-0 animate-tab overflow-auto"
          >
            {activeTab === "editor" && (
              <NotesEditor
                flashcards={flashcards}
                setFlashcards={setFlashcards}

              />
            )}

            {activeTab === "flashcards" && (
              <FlashcardsPage
                flashcards={flashcards}
                setFlashcards={setFlashcards}
              />
            )}

            {activeTab === "ai" && <AIToolsPage />}
          </div>

        </div>

      </div>
    </div>
  );
}
