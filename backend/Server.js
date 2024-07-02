const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const userroutes = require("./routes/UserRoutes");
const todoroutes = require("./routes/ToDoRoutes");


const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

try {
  mongoose
  .connect("mongodb+srv://yashjain2312:Y9WkD20gObG2p7fN@cluster0.yidxr0i.mongodb.net/")
  .then(() => console.log("MongoDB connected..."))
} catch (error) {
  console.log(err);
}

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected..."))
//   .catch((err) => console.log(err));
app.use("/user", userroutes)
app.use("/api/:username", todoroutes);

app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
