import mongoose from "mongoose";
import progressModel from "../models/progress.model.js";
import chapterModel from "../models/chapter.model.js";
import courseModel from "../models/course.model.js";

export const getCourseProgress = async (req, res) => {
	try {
		const { courseId } = req.params;

		const progress = await progressModel.findOne({
			userId: new mongoose.Types.ObjectId(req.user._id),
			courseId: new mongoose.Types.ObjectId(courseId),
		});
		if (!progress) {
			return res.status(200).json({
				message: "No progress data found",
			});
		}

		return res.status(200).json({
			message: "Progress data fetched successfully",
			progress,
		});
	} catch (error) {
		console.log("Error while fetching course progress : ", error);
		return res.status(500).json({
			message: "Something went wrong while fetching progress",
		});
	}
};
