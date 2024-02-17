import express from "express";
import auth from "../middlewares/auth.js";

import {
	getChapterById,
	getCourseChapters,
	markChapterAsComplete,
	updateChapter,
} from "../controllers/chapter.controller.js";
const router = express.Router();

router.get("/course/:courseId", auth, getCourseChapters);
router.get("/:chapterId", auth, getChapterById);
router.post("/:chapterId/progress", auth, markChapterAsComplete);
router.patch("/:chapterId", auth, updateChapter);

export default router;
