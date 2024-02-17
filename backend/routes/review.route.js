import express from "express";
import { addReview } from "../controllers/review.controller.js";
import auth from "../middlewares/auth.js";
const router = express.Router();

router.post("/course/:courseId", auth, addReview);

export default router;
