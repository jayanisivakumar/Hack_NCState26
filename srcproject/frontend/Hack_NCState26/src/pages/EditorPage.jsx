import { useState } from "react";
import NotesEditor from "../components/editor/NotesEditor";
import FlashcardsPage from "./FlashcardsPage";
import AIToolsPage from "./AIToolsPage";
import Sidebar from "../components/layout/SideBar";

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
          <div className="bg-[#ECECF0] rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab("editor")}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                activeTab === "editor"
                  ? "bg-white shadow text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Editor
            </button>

            <button
              onClick={() => setActiveTab("flashcards")}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                activeTab === "flashcards"
                  ? "bg-white shadow text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              Flashcards
            </button>

            <button
              onClick={() => setActiveTab("ai")}
              className={`px-6 py-2 rounded-full transition-all duration-200 ${
                activeTab === "ai"
                  ? "bg-white shadow text-black"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              AI Tools
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto p-6">
          {activeTab === "editor" && (
            <NotesEditor
              note={selectedNote}
              setNotes={setNotes}
              notes={notes}
            />
          )}

          {activeTab === "flashcards" && (
            <FlashcardsPage
              flashcards={flashcards}
              setFlashCards={setFlashcards}
            />
          )}

          {activeTab === "ai" && <AIToolsPage />}
        </div>
      </div>
    </div>
  );
}
