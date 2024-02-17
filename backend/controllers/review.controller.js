import reviewModel from "../models/review.model.js";
import courseModel from "../models/course.model.js";
import mongoose from "mongoose";

export const addReview = async (req, res) => {
	try {
		const { courseId } = req.params;
		const course = await courseModel.findById(courseId);
		if (!course) {
			return res.status(404).json({
				message: "course not found",
			});
		}

		const review = await reviewModel.create({
			userId: new mongoose.Types.ObjectId(req.user._id),
			courseId: new mongoose.Types.ObjectId(courseId),
			content: req.body.content,
		});

		return res.status(200).json({
			message: "Review added successfully",
			review,
		});
	} catch (error) {
		console.log("Error while adding review : ", error);
		return res.status(500).json({
			message: "Something went wrong while adding review",
		});
	}
};
