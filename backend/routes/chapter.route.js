import express from "express";
import auth from "../middlewares/auth.js";

import {
	getCourseChapters,
	markChapterAsComplete,
} from "../controllers/chapter.controller.js";
const router = express.Router();

router.get("/course/:courseId", auth, getCourseChapters);
router.post("/:chapterId/progress", auth, markChapterAsComplete);

export default router;
