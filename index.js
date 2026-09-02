import express from "express";
import mongoose from "mongoose";
import User from "./models/user.model.js";

const app = express();
const port = 8000;

//mongodb connection url
const mongoURL = "mongodb+srv://narak:beluga1245@cluster0.e0r9qa0.mongodb.net/Mern";

app.use(express.json());//middleware to parse json data from the request body

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


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/create",async (req,res)=>{
  try {
      let  {name,age,email,password,userName} = req.body;
      const newUser = User.create({name,age,email,password,userName});
      return res.status(201).json({message:"User created successfully",user:newUser});
  }catch (error) { 
      console.error("Error creating user:", error);
      return res.status(500).json({message:"Error creating user"});
  }
})

app.listen(port, () => {
  //run the connectDB function to establish the connection
  connectDB();
  console.log(`Server is running on port ${port}`);
});//connectdb is in the listen function because we want to connect to the database only when the server is running.