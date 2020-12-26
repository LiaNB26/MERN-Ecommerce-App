import express from "express";
import {
  authUser,
  registerUser,
  getUserProfile,
} from "../controllers/users-controllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// router.post("/", registerUser);
router.post("/login", authUser);
router.post("/register", registerUser);

router.use(protect);

router.get("/profile", getUserProfile);

export default router;
