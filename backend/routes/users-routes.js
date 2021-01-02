import express from "express";
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/users-controllers.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, isAdmin, getUsers);

router.post("/login", authUser);
router.post("/register", registerUser);

router.use(protect);

router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile);

router.delete("/:id", isAdmin, deleteUser);
router.get("/:id", isAdmin, getUserById);
router.put("/:id", isAdmin, updateUser);

export default router;
