import express from "express";
import { getCourseProgress } from "../controllers/progress.controller.js";
import auth from "../middlewares/auth.js";
const router = express.Router();

router.get("/course/:courseId", auth, getCourseProgress);

export default router;
