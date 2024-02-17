import courseModel from "../models/course.model.js";
import mongoose from "mongoose";

import "dotenv/config";

export const getCourses = async (req, res) => {
	const search = req.query.search;
	const tags = req.query.tags;
	const page = parseInt(req.query.page) || 1;
	const limit = parseInt(req.query.limit) || 10;

	const filter = {};
	if (search) {
		filter.$or = [
			{ name: { $regex: search, $options: "i" } },
			{ desc: { $regex: search, $options: "i" } },
			{ shortDesc: { $regex: search, $options: "i" } },
		];
	}
	if (tags) {
		filter.tags = { $in: tags.split(",") };
	}
	try {
		const courses = await courseModel
			.find(filter)
			.skip((page - 1) * limit)
			.limit(limit);

		const totalCourses = await courseModel.countDocuments(filter);
		const totalPages = Math.ceil(totalCourses / limit);

		return res.status(200).json({
			message: "Courses fetched successfully",
			courses,
			page,
			limit,
			totalCourses,
			totalPages,
			hasNextPage: totalPages > page,
			hasPreviousPage: page > 1,
		});
	} catch (error) {
		console.log("Error while getting courses : ", error);
		return res.status(500).json({
			message: "Something went wrong while fetching courses",
		});
	}
};

export const getCourseById = async (req, res) => {
	const courseId = req.params.id;
	try {
		const course = await courseModel.aggregate([
			{
				$match: {
					_id: new mongoose.Types.ObjectId(courseId),
				},
			},
			{
				$lookup: {
					from: "chapters",
					localField: "_id",
					foreignField: "courseId",
					as: "chapters",
				},
			},
			{
				$lookup: {
					from: "reviews",
					localField: "_id",
					foreignField: "courseId",
					pipeline: [
						{
							$lookup: {
								from: "users",
								localField: "userId",
								foreignField: "_id",
								pipeline: [
									{
										$project: {
											name: true,
											username: true,
											profileImage: true,
										},
									},
								],
								as: "user",
							},
						},
						{
							$unwind: {
								path: "$user",
								preserveNullAndEmptyArrays: true,
							},
						},
					],
					as: "reviews",
				},
			},
		]);

		return res.status(200).json({
			message: "Course fetched successfully",
			course,
		});
	} catch (error) {
		console.log("Error while getting courses : ", error);
		return res.status(500).json({
			message: "Something went wrong while fetching courses",
		});
	}
};

export const updateCourse = async (req, res) => {
	console.log("req.params", req.params);
	const { courseId } = req.params;
	try {
		const course = await courseModel.findById(courseId);
		if (!course) {
			return res.status(404).json({
				message: "course not found",
			});
		}
		const allowedUpdates = [
			"name",
			"shortDesc",
			"desc",
			"difficulty",
			"price",
			"tags",
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
			course[update] = req.body[update];
		});

		await course.save();
		return res.status(200).json({
			message: "course updated successfully",
			course,
		});
	} catch (error) {
		console.log("Error while updating course : ", error);
		return res.statu(500).json({
			message: "Something went wrong while updating course",
		});
	}
};

export const enrollCourse = async (req, res) => {
	try {
		const { courseId } = req.params;
		req.user.enrolledCourses.push(new mongoose.Types.ObjectId(courseId));
		await req.user.save();

		return res.status(200).json({
			message: "Student enrolled successfully",
		});
	} catch (error) {
		console.log("Error while enrolling to course", error);
		return res.status(500).json({
			message: "Something went wrong while enrolling into the couse",
		});
	}
};
