import mongoose from "mongoose";
import blogModel from "../models/blog.model.js";

export const createBlog = async (req, res) => {
	try {
		const { title, desc } = req.body;
		const blog = await blogModel.create({
			userId: new mongoose.Types.ObjectId(req.user._id),
			title,
			desc,
		});

		return res.status(200).json({
			message: "Blog created ssuccessfully",
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
