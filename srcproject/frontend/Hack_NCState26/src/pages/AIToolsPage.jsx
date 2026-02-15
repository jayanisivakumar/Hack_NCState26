import { Sparkles, FileText, CheckSquare, Lightbulb, Brain, Calendar, Upload, Users, Wand2 } from "lucide-react";

const AIToolsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      
      {/* Header Section */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-purple-100 border border-purple-200 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="text-purple-600" />
            <h1 className="text-2xl font-semibold text-gray-800">
              AI-Powered Study Tools
            </h1>
          </div>
          <p className="text-gray-600">
            Leverage artificial intelligence to enhance your learning experience
          </p>

          {/* Feature Preview Icons */}
          <div className="grid grid-cols-3 gap-8 mt-8 text-center">
            <div>
              <FileText className="mx-auto text-purple-600 mb-2" />
              <h3 className="font-semibold text-gray-800">Auto-Summaries</h3>
              <p className="text-sm text-gray-600">
                Concise overviews of your notes
              </p>
            </div>

            <div>
              <CheckSquare className="mx-auto text-purple-600 mb-2" />
              <h3 className="font-semibold text-gray-800">Practice Problems</h3>
              <p className="text-sm text-gray-600">
                Custom questions to test knowledge
              </p>
            </div>

            <div>
              <Lightbulb className="mx-auto text-purple-600 mb-2" />
              <h3 className="font-semibold text-gray-800">Smart Insights</h3>
              <p className="text-sm text-gray-600">
                Key concepts and connections
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Tools – Locked Features Section */}
        <div className="max-w-5xl mx-auto mt-10 space-y-6">

        {/* Add More Content Card */}
        <div className="bg-amber-50 border border-amber-300 rounded-2xl p-6 shadow-sm text-center">
            <Lightbulb className="mx-auto text-amber-600 mb-3" size={28} />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Add More Content
            </h2>
            <p className="text-gray-600">
            Write at least a few sentences in the Notes Editor to unlock
            AI-powered features like summaries and practice problems.
            </p>
        </div>

        {/* Automatic Summary Card */}
        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-3">
                <Sparkles className="text-purple-600" size={20} />
                <div>
                <h3 className="font-semibold text-gray-800">Automatic Summary</h3>
                <p className="text-sm text-gray-600">
                    AI-generated concise summary of your notes
                </p>
                </div>
            </div>

            <button
                onClick={() => console.log("Generate Summary clicked")}
                className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:bg-purple-600 hover:shadow-md active:scale-95"
            >
                <Wand2 size={16} />
                Generate Summary
            </button>
            </div>

        {/* Practice Problems Card */}
        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-3">
                <Sparkles className="text-green-600" size={20} />
                <div>
                <h3 className="font-semibold text-gray-800">Practice Problems</h3>
                <p className="text-sm text-gray-600">
                    Custom questions generated from your notes
                </p>
                </div>
            </div>

            <button
                onClick={() => console.log("Generate Problems clicked")}
                className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:bg-purple-600 hover:shadow-md active:scale-95"
            >
                <Wand2 size={16} />
                Generate Problems
            </button>
            </div>
        </div>

      {/* Coming Soon Section */}
      <div className="max-w-5xl mx-auto mt-10">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Coming Soon
          </h2>
          <p className="text-gray-600 mb-6">
            AI study tools are currently in development and will be available soon.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="text-purple-600" size={18} />
                <h3 className="font-semibold text-gray-800">Concept Mapping</h3>
              </div>
              <p className="text-sm text-gray-600">
                Automatically visualize connections between concepts in your notes.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="text-purple-600" size={18} />
                <h3 className="font-semibold text-gray-800">Study Reminders</h3>
              </div>
              <p className="text-sm text-gray-600">
                Smart reminders based on spaced repetition for better retention.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Upload className="text-purple-600" size={18} />
                <h3 className="font-semibold text-gray-800">Import Lecture Recordings</h3>
              </div>
              <p className="text-sm text-gray-600">
                Upload recordings and generate transcripts, flashcards, and summaries.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Users className="text-purple-600" size={18} />
                <h3 className="font-semibold text-gray-800">Study Groups</h3>
              </div>
              <p className="text-sm text-gray-600">
                Collaborate with classmates and share AI-generated study material.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default AIToolsPage;
