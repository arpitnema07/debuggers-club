import express from "express";
import {
	getProfile,
	login,
	register,
	updateProfile,
} from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";
import { imageUpload } from "../middlewares/multer.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.patch("/profile", auth, updateProfile);
router.get("/me", auth, getProfile);

export default router;
