import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    shortDesc: {
      type: String,      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      default: "Easy",
    },
    image: {
      type: String,
      default: null,
    },
    // intro_clip: {
    //   type: String,
    //   default: null,
    // },

    // chapters: [{
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Chapter'
    // }],
    enrolledUser: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
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
