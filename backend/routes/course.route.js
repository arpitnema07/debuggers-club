import express from "express";
import auth from "../middlewares/auth.js";

import { getCourseById, getCourses } from "../controllers/course.controller.js";
const router = express.Router();

router.get("/", auth, getCourses);
router.get("/:id", auth, getCourseById);

export default router;
