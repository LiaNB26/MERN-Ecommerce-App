import express from "express";
import * as productsController from "../controllers/products-controllers.js";

const router = express.Router();

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
router.get("/", productsController.getProducts);

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get("/:id", productsController.getProductById);

export default router;
