import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//mongodb connection url
const mongoURL = process.env.MONGODB_URL;

//function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;