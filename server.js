import express from "express";

 // create an express app
const app = express();
const port = 3000;

//app.[http method]{"route",callback function}

app.use(express.json()); // middleware to parse json data from the request body

// u mention the variable with the http method you want to listen to, and the route you want to listen to, and then a callback function that takes in a request and a response object
app.get("/",(req,res)=>{
  res.json({ message: "Home  welcomes uwu" });
}) // which route to listen to

app.post("/",(req,res)=>{
 let body =  req.body
  res.send("body");
  console.log(body);
}) // same as above but for post requests

let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "Jim Doe" },
  { id: 4, name: "Jill Doe" },
  { id: 5, name: "Jack Doe" },
];

app.get("/user",(req,res)=>{
  res.json({ users });
}) // which route to listen to

//colon represents a variable in the route, so when you make a request to /user/1, the value of id will be 1
app.get("/user/:id",(req,res)=>{
  let id = req.params.id; // get the value of id from the request parameters 
  let user = users.find((user) => user.id === parseInt(id));
  res.json({ user });
});

app.listen(port,()=>{
  console.log(`server is listening on port ${port}`);
}); // makes this server listen on port 3000

