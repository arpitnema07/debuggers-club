import { Router } from "express";
const login = Router();

login.get("/", (req, res) => {
  res.send("Hello From login");
});

login.use("/login", login);

export default login;
