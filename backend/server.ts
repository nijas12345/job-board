import express from "express";
import dotenv from "dotenv";
import dataBaseConnection from './config/mongodb'
import jobRouter from './routes/jobRoute'
import cors from 'cors'
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())
dataBaseConnection()
if(!process.env.PORT) throw new Error("Missing PORT environment variable");
const PORT: number = parseInt(process.env.PORT,10);

app.use("/",jobRouter);

app.listen(PORT, ():void => {
  console.log(`Server is running on port ${PORT}`);
});

