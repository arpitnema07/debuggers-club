import courseModel from "../models/course.model.js";
import mongoose from "mongoose";

import "dotenv/config";

export const getCourses = async (req, res) => {
  const search = req.query.search;
  const tags = req.query.tags;

  const filter = {};
  if (search) {
    filter.search = search;
  }
  if (tags) {
    filter.tags = { $in: tags.split(",") };
  }
  try {
    const courses = await courseModel.find(filter);

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

export const getCourseById = async (req, res) => {
  const id = req.params.id;
  try {
    const courses = await courseModel.findById(new mongoose.Types.ObjectId(id));

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
