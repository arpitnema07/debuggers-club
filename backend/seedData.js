import courseModel from "./models/course.model.js";
import chapterModel from "./models/chapter.model.js";
import connectDB from "./config/connectDB.js";
import mongoose from "mongoose";
connectDB();

const courses = [
	{
		_id: "65cf479b680d5c9fca04b760",
		name: " Learn Algorithm with Visualization",
		shortDesc: ` Embark on a journey through data structures and algorithms with our comprehensive course. Master sorting, and path finding algorithms. Implement Binary search tree and tries for efficient data storage and retrieval. Dive deep into problem-solving strategies and algorithmic thinking. Click On the chapter for using the playground.Start Mastering DSA today !  
		`,
		desc: `Sorting - The arrangement of data in a preferred order is called sorting in the data structure. By sorting data, it is easier to search through it quickly and easily. The simplest example of sorting is a dictionary. $
		Types $
		Quick sort. $
		Bubble Sort.$
		Merge sort. $
		Insertion Sort.$
		Selection Sort. $
		
		
		Path Finding Algorithm - Pathfinding algorithms are usually an attempt to solve the shortest and efficient path problems in graph theory. They try to find the best path given a starting point and ending point based on some predefined criteria. $
 		Types $ 
		Dijkstra's Algorithm$
		A* Search Algorithm$
		Breadth First Search (BFS)
		Depth First Search (DFS)$
 
		Binary Search Tree - A binary search tree follows some order to arrange the elements like the value of the left node must be smaller than the parent node, and the value of the right node must be greater than the parent node. beginner $

		Trie = A trie (derived from retrieval) is a multiway tree data structure used for storing strings over an alphabet. It is used to store a large amount of strings. The pattern matching can be done efficiently using tries.

		
		`,

		difficulty: "Advanced", //can be 'Easy', 'Moderate', 'Advanced'
		// image: '',                 //optional
		tags: [
			"Sorting ","Pathfinding Algorithm","Binary Search Tree" ,"trie"
		 
	  ], //keep any tag related to courses like what user can search 'css', 'js', etc.
	},
];

const chapters = [
	{
		name: "Sorting algorithms",
		desc: "", //optional,
		courseId: new mongoose.Types.ObjectId("65cf479b680d5c9fca04b760"),
		video: "https://www.youtube.com/watch?v=PkJIc5tBRUE",
		article: "",
		document: "",
		playgroundType: "sorting", //Can be one of 'web', 'dsa', 'algo'
	},{
		name: "PathFinding Algorithms",
		desc: "", //optional,
		courseId: new mongoose.Types.ObjectId("65cf479b680d5c9fca04b760"),
		video: "https://www.youtube.com/watch?v=tvAh0JZF2YE",
		article: "",
		document: "",
		playgroundType: "path", //Can be one of 'web', 'dsa', 'algo'
	},	
	{
		name: "Binary Search Tree",
		desc: "", //optional,
		courseId: new mongoose.Types.ObjectId("65cf479b680d5c9fca04b760"),
		video: "https://www.youtube.com/watch?v=qAeitQWjNNg",
		article: "",
		document: "",
		playgroundType: "bst", //Can be one of 'web', 'dsa', 'algo'}
	},	
	{
		name: "Trie",
		desc: "", //optional,
		courseId: new mongoose.Types.ObjectId("65cf479b680d5c9fca04b760"),
		video: "https://www.youtube.com/watch?v=m9zawMC6QAI",
		article: "",
		document: "",
		playgroundType: "trie", //Can be one of 'web', 'dsa', 'algo'
	}
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
