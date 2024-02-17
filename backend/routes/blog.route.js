import express from "express";
import {
	createBlog,
	getAllBlogs,
	getSingleBlog,
} from "../controllers/blog.controller.js";
import auth from "../middlewares/auth.js";
const router = express.Router();

router.post("/", auth, createBlog);
router.get("/", getAllBlogs);
router.get("/:blogId", auth, getSingleBlog);

export default router;
