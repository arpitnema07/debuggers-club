import jwt from "jsonwebtoken";
import "dotenv/config";
import { findUserById } from "../controllers/user.controller.js";
export default async function auth(req, res, next) {
	try {
		// console.log("req.headers.authorization", req.headers.authorization);
		if (!req.headers.authorization) {
			return res.status(401).json({
				message: "No auth token found, Please login first",
			});
		}
		const accessToken = req.headers.authorization.trim().split(" ")[1];
		// console.log("accessToken", accessToken);
		const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
		const userId = decoded.userId;
		const user = await findUserById(userId);
		console.log("user", user);

		if (!user) {
			return res.status(401).json({
				message: "Unauthorized",
			});
		}

		next();
	} catch (error) {
		console.log("Error while authenticating user : ", error);
		return res.status(500).json({
			message: "Something went wrong, Please login again or try again later",
		});
	}
}
