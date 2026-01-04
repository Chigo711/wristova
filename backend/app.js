const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(morgan("dev"));

const userRoutes = require("./routers/userRoutes");
const watchRoutes = require("./routers/watchRoutes");

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/watches", watchRoutes);
