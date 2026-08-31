import express from "express";

 // create an express app
const app = express();
const port = 3000;

//app.[http method]{"route",callback function}

// u mention the variable with the http method you want to listen to, and the route you want to listen to, and then a callback function that takes in a request and a response object
app.get("/",(req,res)=>{
  res.json({ message: "Home  welcomes uwu" });
}) // which route to listen to

app.listen(port,()=>{
  console.log(`server is listening on port ${port}`);
}); // makes this server listen on port 3000

