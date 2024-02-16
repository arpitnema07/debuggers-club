import mongoose from "mongoose";
const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		profileImage: {
			type: String,
			default: null,
		},
		// enrolledCourses: [{
		//   type: mongoose.Schema.Types.ObjectId,
		//   ref: 'Course'
		// }],
		// favCourses: [
		// 	{
		// 		type: mongoose.Schema.Types.ObjectId,
		// 		ref: "Course",
		// 	},
		// ],
		// certificates: [
		// 	{
		// 		type: mongoose.Schema.Types.ObjectId,
		// 		ref: "Certificate",
		// 	},
		// ],
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
