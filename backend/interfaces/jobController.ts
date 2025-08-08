import { Request, Response } from 'express';

export interface IJobController {
  getAllJobs(req: Request, res: Response): Promise<void>;
  createJobData(req: Request, res: Response): Promise<void>;
  updateJobData(req: Request, res: Response): Promise<void>;
  deleteJobData(req: Request, res: Response): Promise<void>;
}