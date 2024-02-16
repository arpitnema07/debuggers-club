import { Router } from "express";
const backend = Router();
import login from "./routes/login.js";

backend.get("/", (req, res) => {
  res.send("Hello From Backend");
});

backend.use("/login", login);

export default backend;