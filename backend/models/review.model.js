import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		courseId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Course",
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

const Review = mongoose.model("Review", reviewSchema);
export default Review;
