const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db")
const User = require("./models/user");
const College = require("./models/college");
const userRoutes = require("./routes/userRoutes");

const authroutes = require("./routes/authroutes");


connectDB();
// connecting frontend 
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server Working");
});
app.get("/colleges", (req, res) => {
  res.json("okay");
});

console.log("JWT_SECRET =", process.env.JWT_SECRET);

app.use("/api/auth" , authroutes);

app.use("/api/user", userRoutes);




app.listen(5000, () => {
  console.log("Server running on port 5000");
});