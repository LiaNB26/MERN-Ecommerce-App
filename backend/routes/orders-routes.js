import express from "express";
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} from "../controllers/orders-controllers.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protect);

router.post("/", addOrderItems);

router.get("/", isAdmin, getOrders);

router.get("/myorders", getMyOrders);

router.get("/:id", getOrderById);

router.put("/:id/pay", updateOrderToPaid);

router.put("/:id/deliver", isAdmin, updateOrderToDelivered);

export default router;
