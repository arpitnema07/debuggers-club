import courseModel from "./models/course.model.js";
import chapterModel from "./models/chapter.model.js";
import connectDB from "./config/connectDB.js";
import mongoose from "mongoose";
connectDB();

const courses = [
	{
		_id: "65cf479b680d5c9fca04b760",
		name: "DSA Lecture",
		shortDesc: "short description",
		desc: "full description",
		difficulty: "Easy", //can be 'Easy', 'Moderate', 'Advanced'
		// image: '',                 //optional
		tags: ["dsa", "html", "web"], //keep any tag related to courses like what user can search 'css', 'js', etc.
	},
];

const chapters = [
	{
		name: "chapter-1",
		desc: "", //optional,
		courseId: new mongoose.Types.ObjectId("65cf479b680d5c9fca04b760"),
		video: "",
		article: "",
		document: "",
		playgroundType: "web", //Can be one of 'web', 'dsa', 'algo'
	},
];

const seedCourses = async () => {
	const existingCourses = await courseModel.find({});
	console.log("existingCourses", existingCourses);
	const coursesToInsert = [];
	for (const course of courses) {
		for (const existingCourse of existingCourses) {
			if (existingCourse._id.toString() === course._id) {
				return;
			}
		}
		coursesToInsert.push(course);
	}

	await courseModel.insertMany(coursesToInsert);
};

const seedChapters = async () => {
	const chaptersToInsert = [];
	for (const chapter of chapters) {
		const isCourseExists = await courseModel.findById(chapter.courseId);
		if (!isCourseExists) {
			throw new Error("Course does not exist");
		}

		chaptersToInsert.push(chapter);
	}
	await chapterModel.insertMany(chaptersToInsert);
};

// await seedCourses();
// await seedChapters();

await chapterModel.updateMany(
	{ courseId: new mongoose.Types.ObjectId("65cf479b680d5c9fca04b763") },
	{ $set: { playgroundType: "web" } }
);

console.log("Data seeded successfully");

process.exit();
