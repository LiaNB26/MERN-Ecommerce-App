import express from "express";
import { addOrderItems } from "../controllers/orders-controllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.post("/", addOrderItems);

export default router;
