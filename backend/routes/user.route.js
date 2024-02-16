import express from "express";
import { getProfile, login, register } from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/me", auth, getProfile);

export default router;
