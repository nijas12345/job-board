import { JobDoc, JobInput } from "../models/job";

export interface IJobRepository{
    getAllJobs():Promise<JobDoc[]>;
    createJobData(jobData:JobInput):Promise<JobDoc|null>;
    updateJobData(id:string,updatedData:Partial<JobDoc>):Promise<JobDoc|null>
    deleteJobData(id:string):Promise<void>
}