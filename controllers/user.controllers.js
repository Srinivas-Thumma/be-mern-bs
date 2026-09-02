import User from "../models/user.model.js";

export const home = (req, res) => {
  res.send("Hello World");
};

export const createUser = async (req,res)=>{
  try {
      let  {name,age,email,password,userName} = req.body;
      const newUser = User.create({name,age,email,password,userName});
      return res.status(201).json({message:"User created successfully",user:newUser});
  }catch (error) { 
      console.error("Error creating user:");
      return res.status(500).json({message:"Error creating user"});
  }
};

export const getAllUsers = async(req,res)=>{
  try{
    const users = await User.find();
    return res.status(200).json({users});
  }catch(e){
    console.error("Error fetching users:", e);
    return res.status(400).json({message:"Error fetching users"});
  }
};

export const getUserByUserName = async(req,res)=>{
  try{
    const user = await User.findOne({userName: req.params.userName});
    return res.status(200).json({user});
  }catch(e){
    console.error("Error fetching user:", e);
    return res.status(400).json({message:"Error fetching user"});
  }
};

export const updateUser = async(req,res)=>{
  try{
    const user = await User.findOneAndUpdate({userName: req.params.userName}, req.body, {new: true});
    return res.status(200).json({user});
  }catch(e){
    console.error("Error updating user:", e);
    return res.status(400).json({message:"Error updating user"});
  }
};

export const deleteUser = async(req,res)=>{
  try{
    const user = await User.findOneAndDelete({userName: req.params.userName});
    return res.status(200).json({message:"User deleted successfully",user});
  }catch(e){
    console.error("Error deleting user:", e);
    return res.status(400).json({message:"Error deleting user"});
  }
};