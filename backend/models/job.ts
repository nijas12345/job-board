
import {Schema,model,InferSchemaType, Types} from 'mongoose'

const jobSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
})

export type JobInput = InferSchemaType<typeof jobSchema>;
export type JobDoc = JobInput & { _id?: Types.ObjectId };

export const JobModel = model<JobDoc>('Job',jobSchema)