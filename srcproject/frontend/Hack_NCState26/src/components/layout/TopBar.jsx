import  PackNotesIcon  from "../../assets/icons/PackNotes-logo.png";

export default function TopBar() {
  return (
    <div className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center">
      
      {/* Logo container */}
      <div className="w-10 h-10 rounded-xl flex items-center justify-center">
        <img src={PackNotesIcon} alt="PackNotes Logo" className="w-6 h-6" />
      </div>

      {/* App Name */}
      <h1 className="ml-3 text-2xl font-semibold text-gray-900">
        PackNotes
      </h1>

    </div>
  );
}
