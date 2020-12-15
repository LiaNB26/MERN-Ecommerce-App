// const express = require("express");
// const productsController = require("../controllers/products-controllers");

import express from "express";
import * as productsController from "../controllers/products-controllers.js";

const router = express.Router();

router.get("/", productsController.getProducts);
router.get("/:id", productsController.getProductById);

export default router;
