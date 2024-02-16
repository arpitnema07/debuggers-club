import express, { Router } from "express";
const backend = Router();
import userRoutes from "./routes/user.route.js";
import connectDB from "./config/connectDB.js";
connectDB();

backend.use(express.urlencoded({ extended: true }));
backend.use(express.json());

backend.get("/", (req, res) => {
	res.send("Hello From Backend");
});

backend.use("/users", userRoutes);

export default backend;
