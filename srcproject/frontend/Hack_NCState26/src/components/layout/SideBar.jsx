import { useState } from "react";
import {
  Folder,
  FileText,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export default function Sidebar({
  notes,
  selectedNote,
  setSelectedNote,
  isOpen,
  setIsOpen,
}) {
  const [openFolders, setOpenFolders] = useState({});

  const toggleFolder = (folder) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folder]: !prev[folder],
    }));
  };

  return (
    <div
      className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${
        isOpen ? "w-72 p-4" : "w-16 p-2"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        {isOpen && <h2 className="text-lg font-semibold">My Notes</h2>}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-black transition"
        >
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      {/* Folder List */}
      <div className="flex-1 space-y-3">
        {Object.keys(notes).map((folder) => (
          <div key={folder}>
            {/* Folder Row */}
            <div
              onClick={() => toggleFolder(folder)}
              className="flex items-center gap-2 cursor-pointer text-gray-700 font-medium hover:bg-gray-100 px-2 py-1 rounded"
            >
              {openFolders[folder] ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
              <Folder size={16} />
              {isOpen && folder}
            </div>

            {/* Notes Inside Folder */}
            {openFolders[folder] && (
              <div className="ml-6 mt-2 space-y-1">
                {notes[folder].map((note) => (
                  <div
                    key={note.id}
                    onClick={() => setSelectedNote(note)}
                    className={`flex items-center gap-2 px-2 py-1 rounded cursor-pointer ${
                      selectedNote?.id === note.id
                        ? "bg-blue-100 text-blue-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <FileText size={14} />
                    {isOpen && note.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      {isOpen && (
        <div className="text-sm text-gray-500 mt-4">
          <p>Total Notes: {Object.values(notes).flat().length}</p>
        </div>
      )}
    </div>
  );
}
