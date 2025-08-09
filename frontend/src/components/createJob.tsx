interface CreateJobButtonProps {
  onClick: () => void;
}

export default function CreateJobButton({ onClick }: CreateJobButtonProps) {
  return (
    <div className="max-w-7xl mx-auto mb-6 flex justify-end">
      <button
        onClick={onClick}
        className="bg-blue-800 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        + Create A Job
      </button>
    </div>
  );
}
