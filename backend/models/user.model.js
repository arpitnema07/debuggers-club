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
		roleName: {
			type: String,
			enum: ["user", "admin"],
			default: "user",
		},
		phone: {
			type: String,
		},
		state: {
			type: String,
		},
		country: {
			type: String,
		},
		qualification: {
			type: String,
			enum: ["10+2", "Diploma", "Graduation", "Post-Graduation"],
		},
		enrolledCourses: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Course",
			},
		],
		favCourses: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Course",
			},
		],
		// certificates: [
		// 	{
		// 		type: mongoose.Schema.Types.ObjectId,
		// 		ref: "Certificate",
		// 	},
		// ],
	},
	{ timestamps: true }
);

userSchema.post("save", function (err, doc, next) {
	if (err.code === 11000) {
		throw new Error("User already exists");
	} else {
		next();
	}
});

const User = mongoose.model("User", userSchema);
export default User;
