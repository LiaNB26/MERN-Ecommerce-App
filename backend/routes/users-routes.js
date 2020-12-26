import express from "express";
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/users-controllers.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// router.post("/", registerUser);
router.post("/login", authUser);
router.post("/register", registerUser);

router.use(protect);

router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile);

export default router;
