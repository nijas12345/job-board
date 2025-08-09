
import axiosInstance from "../axiosInstance/axiosInstance";
import { Job } from "../interfaces/interface";
export const fetchJobData = async() =>{
    try {
    const response = await axiosInstance.get('/');
    return response.data.message
    } catch (error) {
        console.error(error);
        return []
    }
}
export const updateJobData = async(_id:string,updatedData:Partial<Job>) =>{
    try {
        const response = await axiosInstance.put(`/updateJob/${_id}`, updatedData); 
        
        return response.data.message
    } catch (error) {
        console.error(error)
    }
}
export const createJobData = async (
  jobData: Partial<Job>
): Promise<Job> => {
  try {
    const response = await axiosInstance.post("/createJob", jobData);
    console.log(response.data.message);
    return response.data.message;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteJobData = async(_id:string) =>{
    try {
    const response = await axiosInstance.delete(`/deleteJob/${_id}`); 
    return response.data.message;
    } catch (error) {
        console.error(error)
    }
}



