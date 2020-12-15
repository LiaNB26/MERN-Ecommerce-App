// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const productsRoutes = require("./routes/products-routes");

import express from "express";
import dotenv from "dotenv";
import colors from "colors";

import connectDB from "./config/db.js";
import productsRoutes from "./routes/products-routes.js";

dotenv.config();

connectDB();

const app = express();

app.use("/api/products", productsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
