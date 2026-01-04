const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// Middleware
app.use(express.json());
app.use(cors());

mongoose.connect(DB).then(() => {
  console.log("Database Connection Successful");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// , {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   }
