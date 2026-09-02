import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import User from "./models/user.model.js";

const app = express();
const port = 8000;

//mongodb connection url
const mongoURL = process.env.MONGODB_URL;

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

app.get("/users",async(req,res)=>{
  try{
    const users = await User.find();
    return res.status(200).json({users});
  }catch(e){
    console.error("Error fetching users:", e);
    return res.status(400).json({message:"Error fetching users"});
  }
})

app.get("/users/:userName",async(req,res)=>{
  try{
    const user = await User.findOne({userName: req.params.userName});
    return res.status(200).json({user});
  }catch(e){
    console.error("Error fetching user:", e);
    return res.status(400).json({message:"Error fetching user"});
  }
})

app.post("/create",async (req,res)=>{
  try {
      let  {name,age,email,password,userName} = req.body;
      const newUser = User.create({name,age,email,password,userName});
      return res.status(201).json({message:"User created successfully",user:newUser});
  }catch (error) { 
      console.error("Error creating user:");
      return res.status(500).json({message:"Error creating user"});
  }
})

app.put("/update/:userName",async(req,res)=>{
  try{
    const user = await User.findOneAndUpdate({userName: req.params.userName}, req.body, {new: true});
    return res.status(200).json({user});
  }catch(e){
    console.error("Error updating user:", e);
    return res.status(400).json({message:"Error updating user"});
  }
})

app.delete("/delete/:userName",async(req,res)=>{
  try{
    const user = await User.findOneAndDelete({userName: req.params.userName});
    return res.status(200).json({message:"User deleted successfully",user});
  }catch(e){
    console.error("Error deleting user:", e);
    return res.status(400).json({message:"Error deleting user"});
  }
})


app.listen(port, () => {
  //run the connectDB function to establish the connection
  connectDB();
  console.log(`Server is running on port ${port}`);
});//connectdb is in the listen function because we want to connect to the database only when the server is running.