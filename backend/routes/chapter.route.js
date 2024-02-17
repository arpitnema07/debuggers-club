import express from "express";
import auth from "../middlewares/auth.js";

import { getChapters } from "../controllers/chapter.controller.js";
const router = express.Router();

router.get("/", auth, getChapters);
// router.get("/:id", auth, getCourseById);

export default router;
