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

    // discussionId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Discussion",
    // },
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

const User = mongoose.model("Course", courseSchema);
export default User;
