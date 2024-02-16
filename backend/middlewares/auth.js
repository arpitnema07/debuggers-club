import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
export default function auth(req, res, next) {
	try {
	} catch (error) {
		console.log("Error while authenticating user : ", error);
		return res.status(500).json({
			message: "Something went wrong, Please login again or try again later",
		});
	}
}
