import express, { Router } from "express";
import userRoutes from "./routes/user.route.js";
import chapterRoutes from "./routes/chapter.route.js";
import courseRoutes from "./routes/course.route.js";
import connectDB from "./config/connectDB.js";
const backend = Router();
connectDB();

backend.use(express.urlencoded({ extended: true }));
backend.use(express.json());

backend.get("/", (req, res) => {
  res.send("Hello From Backend");
});

backend.use("/users", userRoutes);
backend.use("/courses", courseRoutes);
backend.use("/course/chapter", chapterRoutes);

export default backend;
