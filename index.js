import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import User from "./models/user.model.js";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.route.js";

const app = express();
const port = 8000;



app.use(express.json());//middleware to parse json data from the request body

app.use("/",userRouter);//we are using the userRouter for all the routes starting with /, so we can keep our code organized and modular. This way we can keep our code organized and modular.

app.listen(port, () => {
  //run the connectDB function to establish the connection
  connectDB();
  console.log(`Server is running on port ${port}`);
});//connectdb is in the listen function because we want to connect to the database only when the server is running.