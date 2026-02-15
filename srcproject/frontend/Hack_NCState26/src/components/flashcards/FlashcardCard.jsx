import EditIcon from "../../assets/icons/edit-icon.png";
import DeleteIcon from "../../assets/icons/delete-icon.png";

export default function FlashcardCard({ card, onDelete, onEdit }) {
  return (
    <div className="w-full max-w-4xl bg-white rounded-xl p-6 border shadow-sm">

      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500">Term</p>
          <p className="text-lg font-semibold">{card.term}</p>
        </div>

        <div className="flex gap-4">
          <button onClick={onEdit}
          className="w-6 h-6">
            <img src={EditIcon} alt="Edit Icon" className="w-full h-full cursor-pointer" />
          </button>
          <button
            onClick={onDelete}
            className="w-6 h-6">
            <img src={DeleteIcon} alt="Delete Icon" className="w-full h-full cursor-pointer" />
          </button>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-gray-500">Definition</p>
        <p>{card.definition}</p>
      </div>

    </div>
  );
}
