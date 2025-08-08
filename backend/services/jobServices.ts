import { IJobRepository } from "../interfaces/jobRepository";
import { IJobService } from "../interfaces/jobService";
import { JobDoc, JobInput } from "../models/job";
import {HttpError} from '../utils/httpError'

class JobService implements IJobService {
  private jobRepository: IJobRepository;

  constructor(jobRepository: IJobRepository) {
    this.jobRepository = jobRepository;
  }
    getAllJobs = async(): Promise<JobDoc[]> => {
    try {
    const jobData:JobDoc[] = await this.jobRepository.getAllJobs();
    return jobData;
    } catch (error) {
        throw error
    }
  }
   createJobData = async(jobData: JobInput): Promise<JobDoc> =>{
       try {
        const jobDetails:JobDoc|null = await this.jobRepository.createJobData(jobData);
        if (!jobDetails) throw new HttpError(404, 'No Job Data');
        return jobDetails
       } catch (error) {
        throw error;
       }
   }
   updateJobData = async(id: string, updatedData: Partial<JobDoc>): Promise<JobDoc> => {
       try {
        const jobDetails:JobDoc|null = await this.jobRepository.updateJobData(id,updatedData);
         if (!jobDetails) throw new HttpError(404, 'No Job Data');
        return jobDetails
       } catch (error:unknown) {
        throw error;
       }
   }
   deleteJobData = async(id: string): Promise<JobDoc[]> => {
       try {
        await this.jobRepository.deleteJobData(id);
        const jobData:JobDoc[] = await this.jobRepository.getAllJobs();
        return jobData
       } catch (error) {
        throw error;
       }
   }
 
}

export default JobService
