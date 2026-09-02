import mongoose from "mongoose";

//creating a schema for the user model. A schema is a blueprint for the data we want to store in the database. It defines the structure of the documents in the collection. In this case, we are creating a schema for the users collection. The schema defines the fields that will be present in each document and their data types. We are also specifying that some fields are required and some fields should be unique.
const userSchema = new mongoose.Schema({
  name :{ type: String, required: true } , 
  age :{ type: Number, required: true } ,
  email :{ type: String, required: true , unique: true } ,
  password :{ type: String, required: true } ,
  userName  :{type: String , required: true , unique: true } 

} , {timestamps: true})

//we created a model User , this will be used to interact with the users collection in the database. The first argument is the name of the collection and the second argument is the schema we created above. 
const User = mongoose.model("User" , userSchema);
//mongodb will convert name into small and plural - User to users .

// we will exporting User model , as we will be using it in other files to interact with the users collection in the database.
export default User;
