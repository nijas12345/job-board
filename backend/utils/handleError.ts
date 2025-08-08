import { Response } from "express";
import { HttpError } from "./httpError"; // Adjust path
import {HttpStatus} from '../enums/HttpStatusCode'

export function handleError(error: unknown, res: Response) {
    
  if (error instanceof HttpError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  return res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .json({ message: "Something went wrong. Please try again later." });
}