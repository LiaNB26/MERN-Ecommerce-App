import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
} from "../controllers/products-controllers.js";

import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", protect, isAdmin, createProduct);

router.get("/:id", getProductById);

router.put("/:id", protect, isAdmin, updateProduct);

router.delete("/:id", protect, isAdmin, deleteProduct);

router.post("/:id/reviews", protect, createProductReview);

export default router;
