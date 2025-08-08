import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const dataBaseConnection = async () => {
  try {
    const mongoUrl = process.env.MONGODB_URL;
    if (!mongoUrl) {
      console.error("MONGODB_URL is not defined in the environment variables.");
      process.exit(1);
    }

    await mongoose.connect(mongoUrl);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);  // Exit if DB connection fails
  }
};

export default dataBaseConnection;
