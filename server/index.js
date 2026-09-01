import express from "express";
import cors from "cors";

let app = express();
const port = 8000;

app.use(cors({
  origin: "http://localhost:5173",
})); // Enable CORS for the specified origin
app.use(express.json()); // Middleware to parse JSON request bodies

app.get("/", (req, res) => {
  res.json({ name: "owl" , age: 20 });
});

app.post("/", (req, res) => {
  console.log(req.body); // Log the request body to the console
  res.send({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

