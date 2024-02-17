import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		content: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
		},
	},
	{ timestamps: true }
);
