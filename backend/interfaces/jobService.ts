import { JobDoc, JobInput } from "../models/job";

export interface IJobService{
    getAllJobs():Promise<JobDoc[]>
    createJobData(jobData:JobInput):Promise<JobDoc>
    updateJobData(id:string,updatedData:Partial<JobDoc>):Promise<JobDoc>
    deleteJobData(id:string):Promise<JobDoc[]>
}