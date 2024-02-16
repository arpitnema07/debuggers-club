import chapterModel from "../models/chapter.model.js";
import mongoose from "mongoose";

import "dotenv/config";

export const getChapters = async (req, res) => {
  const courseId = req.body.courseId;
  try {
    const courses = await chapterModel.find({ courseId });

    return res.status(200).json({
      message: "Fetched Courses",
      courses,
    });
  } catch (error) {
    console.log("Error while getting courses : ", error);
    return res.status(500).json({
      message: "Something went wrong while fetching courses",
    });
  }
};
