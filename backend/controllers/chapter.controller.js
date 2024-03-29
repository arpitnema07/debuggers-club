import mongoose from "mongoose";
import chapterModel from "../models/chapter.model.js";
import progressModel from "../models/progress.model.js";

import "dotenv/config";

export const getChapterById = async (req, res) => {
	try {
		const { chapterId } = req.params;
		const chapter = await chapterModel.findById(chapterId);
		if (!chapter) {
			return res.status(404).json({
				message: "chapter not found",
			});
		}
		return res.status(200).json({
			message: "Chapter fetched successfully",
			chapter,
		});
	} catch (error) {
		console.log("Error while getting chapter : ", error);
		return res.status(500).json({
			message: "Something went wrong while fetching chapter",
		});
	}
};

export const getCourseChapters = async (req, res) => {
	const { courseId } = req.params;
	try {
		const chapters = await chapterModel.find({
			courseId: new mongoose.Types.ObjectId(courseId),
		});

		return res.status(200).json({
			chapters,
		});
	} catch (error) {
		console.log("Error while getting courses : ", error);
		return res.status(500).json({
			message: "Something went wrong while fetching courses",
		});
	}
};

export const markChapterAsComplete = async (req, res) => {
	try {
		const { chapterId } = req.params;
		const chapter = await chapterModel.findById(chapterId);
		if (!chapter) {
			return res.status(404).json({
				message: "Chapter not found",
			});
		}

		const courseId = chapter.courseId;
		const userId = req.user._id;

		const existingProgress = await progressModel.findOne({
			userId: new mongoose.Types.ObjectId(userId),
			courseId: new mongoose.Types.ObjectId(courseId),
		});

		let progress;
		if (!existingProgress) {
			progress = await progressModel.create({
				userId: new mongoose.Types.ObjectId(userId),
				courseId: new mongoose.Types.ObjectId(courseId),
				chapterId: new mongoose.Types.ObjectId(chapterId),
			});
		} else {
			progress = existingProgress;
		}

		const totalChaptersInCourse = await chapterModel.countDocuments({
			courseId: new mongoose.Types.ObjectId(courseId),
		});

		progress.completedChapters.push(new mongoose.Types.ObjectId(chapterId));

		console.log("totalChaptersInCourse", totalChaptersInCourse);
		const completePercent =
			Math.round(totalChaptersInCourse / progress.completedChapters.length) *
			100;

		progress.percent = Number(completePercent);

		await progress.save();

		return res.status(200).json({
			message: "Chapter marked as completed successfully",
			courseProgress: progress,
		});
	} catch (error) {
		console.log("Error while marking chapter as complete : ", error);
		return res.status(500).json({
			message: "Something went wrong",
		});
	}
};

export const updateChapter = async (req, res) => {
	try {
		const { chapterId } = req.params;
		const chapter = await chapterModel.findById(chapterId);
		if (!chapter) {
			return res.status(404).json({
				message: "Chapter not found",
			});
		}

		const allowedUpdates = [
			"name",
			"desc",
			"video",
			"article",
			"document",
			"playgroundType",
		];

		const updates = Object.keys(req.body);
		const areUpdatesValid = updates.every((update) => {
			if (!allowedUpdates.includes(update)) {
				return false;
			} else {
				return true;
			}
		});

		if (!areUpdatesValid) {
			return res.status(400).json({
				message: "Invalid updates",
			});
		}

		updates.forEach((update) => {
			chapter[update] = req.body[update];
		});

		await chapter.save();
		return res.status(200).json({
			message: "Chapter updated successfully",
			chapter,
		});
	} catch (error) {
		console.log("Error while updating chapter : ", error);
		return res.status(500).json({
			message: "Chapter updated successfully",
		});
	}
};
