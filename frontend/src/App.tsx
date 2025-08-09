import { useState, useEffect } from "react";
import Header from "./components/header";
import JobCard from "./components/JobCard";
import JobModal from "./components/jobModal";
import { createJobData, deleteJobData, fetchJobData, updateJobData } from "./services/JobApi";
import { Job } from "./interfaces/interface";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import confirmDelete from "./utils/sweetAlert";

const App:React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newJob, setNewJob] = useState({ title: "", company: "", location: "" });
  const [editJobId, setEditJobId] = useState<string | null>(null);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchJobData();
        setJobs(data);
      } catch (error) {
        console.error("Failed to load jobs:", error);
      }
    };
    loadJobs();
  }, []);

  const handleEdit = (_id: string) => {
    const jobToEdit = jobs.find((job) => job._id === _id);
    if (!jobToEdit) return;

    setNewJob({
      title: jobToEdit.title,
      company: jobToEdit.company,
      location: jobToEdit.location,
    });
    setEditJobId(_id);
    setShowModal(true);
  };

const handleDelete = async (_id: string) => {
  const isConfirmed = await confirmDelete("Do you want to delete this job?");
  if (!isConfirmed) return;

  try {
    const updatedJobs = await deleteJobData(_id);
    setJobs(updatedJobs);
    Swal.fire("Deleted!", "The job has been deleted.", "success");
  } catch (error) {
    console.error("Failed to delete job:", error);
    Swal.fire("Error", "Failed to delete job. Please try again.", "error");
  }
};

  const handleSaveJob = async () => {    
    if (!newJob.title.trim() || !newJob.company.trim() || !newJob.location.trim()) {
      Swal.fire("Please fill out all fields");
      return;
    }

    try {
      if (editJobId !== null) {
        const updatedJobFromApi = await updateJobData(editJobId, newJob);
        setJobs((prev) =>
          prev.map((job) => (job._id === editJobId ? updatedJobFromApi : job))
        );
        toast.success("Job Updated Successfully")
      } else {
        const createdJob = await createJobData(newJob);
        setJobs((prev) => [...prev, createdJob]);
        toast.success("Job Created Successfully")
      }

      setNewJob({ title: "", company: "", location: "" });
      setEditJobId(null);
      setShowModal(false);
    } catch (error) {
      console.error("Failed to save job:", error);
      alert("There was an error saving the job.");
    }
  };

  return (
    <>
      <Header />
      <div className="pt-24 min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 text-white p-8">
        <div className="max-w-7xl mx-auto mb-6 flex justify-end">
          <button
            onClick={() => {
              setNewJob({ title: "", company: "", location: "" });
              setEditJobId(null);
              setShowModal(true);
            }}
            className="bg-blue-800 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            + Create A Job
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {jobs.map((job) => (
            <JobCard
              key={job._id}
              title={job.title}
              company={job.company}
              location={job.location}
              onEdit={() => handleEdit(job._id)}
              onDelete={() => handleDelete(job._id)}
            />
          ))}
        </div>
      </div>

      <JobModal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          setEditJobId(null);
        }}
        onSave={handleSaveJob}
        job={newJob}
        setJob={setNewJob}
        isEditing={editJobId !== null}
      />
      <ToastContainer/>
    </>
  );
}

export default App
