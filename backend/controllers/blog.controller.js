import mongoose from "mongoose";
import blogModel from "../models/blog.model.js";
import path from "path";
import fs from "fs";
import { IMAGE_PATH } from "../utils/constants.js";

export const createBlog = async (req, res) => {
	try {
		const { title, desc } = req.body;
		const blog = new blogModel({
			userId: new mongoose.Types.ObjectId(req.user._id),
			title,
			desc,
		});

		if (req.file) {
			const fileName =
				req.file.fieldname +
				"-" +
				Date.now() +
				path.extname(req.file.originalname);
			fs.writeFileSync(`${IMAGE_PATH}/${fileName}`, req.file.buffer);

			blog.blogImage = `images/${fileName}`;
		}

		await blog.save();
		return res.status(200).json({
			message: "Blog created successfully",
			blog,
		});
	} catch (error) {
		console.log("Error while creating blog : ", error);
		return res.status(500).json({
			message: "Something went wrong while creating blog",
		});
	}
};

export const getAllBlogs = async (req, res) => {
	const search = req.query.search || "";
	const page = parseInt(req.query.page) || 1;
	const limit = parseInt(req.query.limit) || 10;

	try {
		const blogs = await blogModel.aggregate([
			{
				$match: {
					title: { $regex: search, $options: "i" },
				},
			},
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
								created_at: true,
								updated_at: true,
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
		]);

		return res.status(200).json({
			message: "Blogs fetched successfully",
			blogs,
		});
	} catch (error) {
		console.log("Error while fetching all blogs", error);
		return res.status(500).json({
			message: "Something went wrong while fetching blogs",
		});
	}
};

export const getSingleBlog = async (req, res) => {
	try {
		const { blogId } = req.params;
		const blog = await blogModel.findById(blogId).populate("userId");
		if (!blog) {
			return res.status(404).json({
				message: "Blog not found",
			});
		}

		return res.status(200).json({
			message: "Blog fetched successfully",
			blog,
		});
	} catch (error) {
		console.log("Error while fetching all blogs", error);
		return res.status(500).json({
			message: "Something went wrong while fetching blogs",
		});
	}
};
