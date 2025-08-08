
import express,{Router} from 'express'
const jobRouter:Router = express.Router()
import { JobModel } from '../models/job'

import JobRepository from '../repositories/jobRepository'
import JobService from '../services/jobServices'
import JobController from '../controllers/jobController'

const jobRepository = new JobRepository(JobModel);
const jobService = new JobService(jobRepository);
const jobController = new JobController(jobService)

jobRouter.get('/',jobController.getAllJobs);
jobRouter.post('/createJob',jobController.createJobData)
jobRouter.put('/updateJob/:id',jobController.updateJobData);
jobRouter.delete('/deleteJob/:id',jobController.deleteJobData);


export default jobRouter
