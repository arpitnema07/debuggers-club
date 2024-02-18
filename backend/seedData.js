import courseModel from "./models/course.model.js";
import chapterModel from "./models/chapter.model.js";
import connectDB from "./config/connectDB.js";
import mongoose from "mongoose";
connectDB();

const courses = [
	{
		_id: "65cf479b680d5c9fca04b762",
		name: " Backend Development Using Java",
		shortDesc: ` Hello Coders.Embark on a Java journey with our comprehensive course, covering fundamental concepts and advanced techniques. Dive deep into object-oriented programming. Data structures, and algorithms. Master Spring Boot  framework for building robust, scalable applications. Gain hands-on experience through practical exercises and real-world  projects.Start  your java  and spring boot adventure today!...
		`,
		desc: `Session 1: Java OOPS Fundamentals $
		1 . Understand the fundamentals of Java OOPS concepts like Object, Class, Inheritance, Polymorphism , Abstraction, and Encapsulation $
		2 .Learn how to handle exceptions in Java,$
		3 .Master the Singleton Design Pattern $
		
		Session 2: Java 8 Functional Interfaces & Collections$
		4 .Learn the differences between Abstract Classes and Interfaces with practical examples $ 
		5 .Explore Functional Interfaces, Lambda Expressions$
		6 .Use Generics and Streams to write efficient code $ 
		7 .Work with Java Collections for efficient data management $ 
		
		Session 3: Multithreading & HashMap $ 
		8 .Delve into the workings of HashMap $ 
		9 .Understand the concepts of Multithreading, such as Thread creation, Thread Groups, and Thread Join $ 
		10 .Learn to differentiate between Sequential and Parallel Streams for effective task execution $
		
		Session 4: Maven for Project Management $11 .Understand the need for Maven $12 .Learn to work with POM.xml, explore different Maven Repositories and their types $13 .Understand the Maven Lifecycle for efficient project management $
		
		Session 5: Spring Boot Basics $14 .Learn the basics of Server and Client model $15 .Introduction to Spring Boot $16 .How to run application as a Server $17 .Understand Embedded Servers like Jetty and Tomcat $18 .Manage Logging Levels in Spring Boot $19 .Work with Spring profiles and terminal commands $ 
		
		Session 6: REST API & Spring MVC $ 20 .Gain knowledge about REST API, HTTP Requests and Responses $ 21 .learn to work with POSTMAN and CURL for API testing $ 22 .Understand Annotations and Lombok $ 23 .Explore the Spring MVC framework $ 
		
		Session 7: Spring IOC & Dependency Injection $ 24 .Learn about the Spring IOC container, Dependency Injection, and Enums $ 25 .Understand the target of an Annotation $ 26 .Configure Beans using @Configuration and @Bean annotations $ 
		
		Session 8: Java Database Connectivity (JDBC) $ 27 .Understand the differences between In-Memory and Disk Storage $ 28 .Learn to connect a Spring Boot application with a Database Server $ 29 .Create Request Classes $ 30 .Perform validations using JDBC $ "`,

		difficulty: "Advance", //can be 'Easy', 'Moderate', 'Advanced'
		// image: '',                 //optional
		tags: [
			"Java OOPS Fundamentals",
			"Functional Interfaces & Collections",
			"MultiThreading",
			"Maven for Project Management",
			"REST API & Spring MVC",
			"Spring Boot",
			"Java Database Connectivity (JDBC)"
		 
	  ], //keep any tag related to courses like what user can search 'css', 'js', etc.
	},
];

const chapters = [
	{
		name: "Java OOPS Fundamentals",
		desc: "", //optional,
		courseId: new mongoose.Types.ObjectId("65cf479b680d5c9fca04b762"),
		video: "https://www.youtube.com/watch?v=bSrm9RXwBaI",
		article: "",
		document: "",
		playgroundType: "dsa", //Can be one of 'web', 'dsa', 'algo'
	},{
		name: "Java 8 Functional Interfaces & Collections",
		desc: "", //optional,
		courseId: new mongoose.Types.ObjectId("65cf479b680d5c9fca04b762"),
		video: "https://www.youtube.com/watch?v=rzA7UJ-hQn4",
		article: "",
		document: "",
		playgroundType: "dsa", //Can be one of 'web', 'dsa', 'algo'
	},	
	{
		name: " Multithreading ",
		desc: "", //optional,
		courseId: new mongoose.Types.ObjectId("65cf479b680d5c9fca04b762"),
		video: "https://www.youtube.com/watch?v=4uQAokzfm-Q",
		article: "",
		document: "",
		playgroundType: "dsa", //Can be one of 'web', 'dsa', 'algo'
	}
	,	
	{
		name: "HashMap",
		desc: "", //optional,
		courseId: new mongoose.Types.ObjectId("65cf479b680d5c9fca04b762"),
		video: "https://www.youtube.com/watch?v=WeF3_nk-UqY",
		article: "",
		document: "",
		playgroundType: "dsa", //Can be one of 'web', 'dsa', 'algo'
	},	
	{
		name: "Maven for Project Management",
		desc: "", //optional,
		courseId: new mongoose.Types.ObjectId("65cf479b680d5c9fca04b762"),
		video: "https://www.youtube.com/watch?v=p0LPfK_oNCM",
		article: "",
		document: "",
		playgroundType: "dsa", //Can be one of 'web', 'dsa', 'algo'
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

await seedCourses();
await seedChapters();

console.log("Data seeded successfully");

process.exit();
