require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const Mongo_Url = process.env.MONGO;

app.use(express.json());

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
});

mongoose
  .connect(Mongo_Url)
  .then(() => console.log("mongoDB is Connected"))
  .catch((e) => console.log(e));

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
