import { Request,Response } from "express"
import { IJobService } from "../interfaces/jobService"
import { IJobController } from "../interfaces/jobController"
import { HttpStatus } from "../enums/HttpStatusCode"
import { JobDoc, JobInput } from "../models/job"
import {handleError} from '../utils/handleError'
import { log } from "node:console"


class JobController implements IJobController{
    private jobService:IJobService
    constructor(jobService:IJobService){
        this.jobService = jobService
    }
    getAllJobs = async(req:Request,res:Response) =>{
    try {
    const serviceResponse = await this.jobService.getAllJobs();
    res.status(HttpStatus.OK).json({message:serviceResponse})
    } catch (error:unknown) {
        handleError(error,res)
    }
    };
    createJobData = async(req: Request, res: Response): Promise<void> => {
    try {
    const jobData:JobInput = req.body;
    const serviceResponse = await this.jobService.createJobData(jobData);
    res.status(HttpStatus.CREATED).json({message:serviceResponse});
    } catch (error) {
         handleError(error,res)
    }
    };
    updateJobData = async(req: Request, res: Response): Promise<void> => {
    try {
    const id:string = req.params.id;
    const updatedData:Partial<JobDoc> = req.body
    const serviceResponse:JobDoc = await this.jobService.updateJobData(id,updatedData)
    res.status(HttpStatus.CREATED).json({message:serviceResponse});
    } catch (error) {
     handleError(error,res)
    } 
    }
    deleteJobData = async(req: Request, res: Response): Promise<void> => {
        try {
    const id:string = req.params.id;
     const serviceResponse = await this.jobService.deleteJobData(id)
     res.status(HttpStatus.OK).json({message:serviceResponse})
        } catch (error) { 
        handleError(error,res)
        }
    }
}

export default JobController