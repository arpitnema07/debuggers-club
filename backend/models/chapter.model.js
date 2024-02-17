import mongoose from "mongoose";

const chapterSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
		},
		courseId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Course",
		},
		video: {
			type: String,
			default: null,
		},
		article: {
			type: String,
			default: null,
		},
		document: {
			type: String,
			default: null,
		},
		playgroundType: {
			type: String,
			enum: ["web", "dsa", "algo"],
		},
	},
	{ timestamps: true }
);

const Chapter = mongoose.model("Chapter", chapterSchema);
export default Chapter;
