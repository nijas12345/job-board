import Swal from 'sweetalert2';

const confirmDelete = async (message: string): Promise<boolean> => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });
  return result.isConfirmed;
};

export default confirmDelete
