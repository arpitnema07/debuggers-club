import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		shortDesc: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		difficulty: {
			type: String,
			enum: ["Easy", "Moderate", "Advanced"],
		},
		image: {
			type: String,
			default: null,
		},
		price: {
			type: Number,
			default: 0,
		},
		// intro_clip: {
		//   type: String,
		//   default: null,
		// },
		enrolledUsers: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		tags: [
			{
				type: String,
			},
		],
		// disd
		// rating : {
		//     type :mongoose.Schema.Types.ObjectId,
		//     ref:"Rating"
		// }
		// certificates: [
		// 	{
		// 		type: mongoose.Schema.Types.ObjectId,
		// 		ref: "Certificate",
		// 	},
		// ],
	},
	{ timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
