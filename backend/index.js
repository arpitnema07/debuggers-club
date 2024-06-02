import express, { Router } from "express";
import userRoutes from "./routes/user.route.js";
import chapterRoutes from "./routes/chapter.route.js";
import courseRoutes from "./routes/course.route.js";
import executeRoutes from "./routes/execute.route.js";
import progressRoutes from "./routes/progress.route.js";
import reviewRoutes from "./routes/review.route.js";
import blogRoutes from "./routes/blog.route.js";
import connectDB from "./config/connectDB.js";
connectDB();

import http from "http";
import { Server } from "socket.io";
const server = express();

const chatServer = http.createServer(server);

const backend = Router();

backend.use(express.urlencoded({ extended: true }));
backend.use(express.json());

backend.get("/", (req, res) => {
  res.send("Hello From Backend");
});

backend.use("/users", userRoutes);
backend.use("/courses", courseRoutes);
backend.use("/chapters", chapterRoutes);
backend.use("/execute", executeRoutes);
backend.use("/progress", progressRoutes);
backend.use("/reviews", reviewRoutes);
backend.use("/blogs", blogRoutes);

export default backend;
