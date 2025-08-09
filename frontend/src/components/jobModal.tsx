import React from "react";

interface Job {
  title: string;
  company: string;
  location: string;
}

interface JobModalProps {
  show: boolean;
  onClose: () => void;
  onSave: () => void;
  job: Job;
  setJob: React.Dispatch<React.SetStateAction<Job>>;
  isEditing: boolean;
}

export default function JobModal({ show, onClose, onSave, job, setJob, isEditing }: JobModalProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          {isEditing ? "Edit Job" : "Create Job"}
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={job.title}
          onChange={(e) => setJob({ ...job, title: e.target.value })}
          className="border p-2 rounded w-full mb-3"
        />
        <textarea
          placeholder="company"
          value={job.company}
          onChange={(e) => setJob({ ...job, company: e.target.value })}
          className="border p-2 rounded w-full mb-3"
          rows={3}
        />
        <input
          type="text"
          placeholder="Location"
          value={job.location}
          onChange={(e) => setJob({ ...job, location: e.target.value })}
          className="border p-2 rounded w-full mb-4"
        />

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {isEditing ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
