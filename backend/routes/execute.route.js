import express from "express";
import { c, cpp, javascript, java, php, python } from "./execute/index.js";

const router = express.Router();

router.use("/java", java);
router.use("/javascript", javascript);
router.use("/python", python);
router.use("/cpp", cpp);
router.use("/c", c);
router.use("/php", php);

export default router;
