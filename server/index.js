import express from "express";
import cors from "cors";

let app = express();
const port = 8000;
 
//configuring cors to allow requests from the client
app.use(cors({
  origin: "http://localhost:5173",
})); // Enable CORS for the specified origin
app.use(express.json()); // Middleware to parse JSON request bodies

// let password = "1234"; // Define a password variable

// app.use((req,res,next) => {
//   if(req.body.pass != password){
//     res.send("Incorrect password");
//   }
//   next();
// }) // custom middleware function that checks if the password in the request body matches the defined password. If it doesn't match, it sends a response with "Incorrect password". If it matches, it calls next() to proceed to the next middleware or route handler.


app.get("/", (req, res) => {
  res.json({ name: "owl" , age: 20 });
});

app.post("/", (req, res) => {
  console.log(req.body); // Log the request body to the console
  res.status(200).send({ success: true });//shows that the request was successful and sends a JSON response back to the client on browser console
});

app.get("/head",(req,res) =>{
  console.log(req.headers); // Log the request headers to the console
  res.set("x-Custom-Header", "This is a custom header"); // Set a custom header in the response
  res.send("Check the response headers for the custom header"); // Send a response to the client , 
  // res.send() is imp after setting header , // because if we don't send a response, the client will keep waiting for a response and the request will time out.
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

