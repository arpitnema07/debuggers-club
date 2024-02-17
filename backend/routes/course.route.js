import express from "express";
import auth from "../middlewares/auth.js";

import {
	enrollCourse,
	getCourseById,
	getCourses,
	updateCourse,
} from "../controllers/course.controller.js";
const router = express.Router();

router.get("/", getCourses);
router.get("/:id", auth, getCourseById);
router.post("/:courseId/enroll", auth, enrollCourse);
router.patch("/:courseId", auth, updateCourse);

export default router;
