import mongoose from "mongoose";

const progressSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    completedChapters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chapter",
      },
    ],
    percent: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Progress = mongoose.model("Progress", progressSchema);
export default Progress;
