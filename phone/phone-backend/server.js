const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

let sampleData = [
  {name: "Shiven", contact: "7977803830"},
  {name: "Aditya", contact: "7988038210"},
  {name: "Ranjit", contact: "9989324501"},
  {name: "Samay", contact: "9938412105"},
];

app.get("/api/db", (req, res) => {  
  res.json(sampleData);
});

app.post("/api/data", (req, res) => {
  const newdata = req.body;
  sampleData = [...sampleData, newdata];
  console.log("Recieved Data", newdata);
  res.json({message: "Data Recievd Successfully", data: newdata});
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
