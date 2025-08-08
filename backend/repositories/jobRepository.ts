import { Model } from "mongoose";
import { IJobRepository } from "../interfaces/jobRepository";
import { JobDoc, JobInput } from "../models/job";

class JobRepository implements IJobRepository {
    private jobModel:Model<JobDoc>;
   constructor(jobModel:Model<JobDoc>){
     this.jobModel = jobModel;
   }
   getAllJobs = async() : Promise<JobDoc[]> => {
       try {
         return await this.jobModel.find();
       } catch (error) {
        throw error
       }
   }
   createJobData = async(jobData: JobInput): Promise<JobDoc|null> => {
       try {
        return await this.jobModel.create(jobData)
       } catch (error) {
        throw error
       }
   }
   updateJobData = async(id: string, updatedData: Partial<JobDoc>): Promise<JobDoc|null> => {
       try {
         return await this.jobModel.findByIdAndUpdate(id,updatedData,{new:true})
       } catch (error) {
        throw error;
       }
   }
   deleteJobData = async(id: string): Promise<void> => {
       try {
        await this.jobModel.findByIdAndDelete(id)
       } catch (error) {
        throw error;
       }
   }

}

export default JobRepository