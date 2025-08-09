import React from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  onEdit: () => void;
  onDelete: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white text-gray-800 p-6 rounded-xl shadow-md w-full max-w-lg relative flex flex-col">
      {/* Job details */}
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 flex-1">{ company}</p>
      <p className="mt-1 text-sm text-gray-500">{location}</p>

      {/* Bottom-right icons */}
      <div className="absolute bottom-4 right-4 flex space-x-3">
        <button
          onClick={onEdit}
          className="text-blue-500 hover:text-yellow-600"
          title="Edit"
        >
          <PencilSquareIcon className="h-5 w-5" />
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-600"
          title="Delete"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
