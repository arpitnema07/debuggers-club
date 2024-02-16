import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return accessToken;
};

export const findUserById = async (userId) => {
  const user = await userModel.findById(userId);
  return user;
};

const findUserByEmailOrUsername = async (username) => {
  const user = await userModel.findOne({
    $or: [{ username }, { email: username }],
  });
  return user;
};

const findUserByEmail = async (email) => {
  const user = await userModel.findOne({
    email: email,
  });
  return user;
};

const findUserByUsername = async (username) => {
  const user = await userModel.findOne({ username: username });
  return user;
};

export const register = async (req, res) => {
  try {
    const { name, username, email, password, confirmPassword } = req.body;
    if (findUserByEmail(email)) {
      return res.status(409).json({
        message: "Email already exist!",
      });
    }

    if (findUserByUsername(username)) {
      return res.status(409).json({
        message: "Username already exist!",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "password and confirmPassword must match",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      name,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(201).json({
      message: "User registered successfully",
      newUser,
    });
  } catch (error) {
    if (error.message === "User already exists") {
      return res.status(409).json({
        message: error.message,
      });
    }
    console.log("Error while registering user : ", error);
    return res.status(500).json({
      message: "Something went wrong while registering user",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("req.body", req.body);
    const existingUser = await findUserByEmailOrUsername(username);
    if (!existingUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    console.log("existingUser", existingUser);
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      return res.status(400).json({
        message: "Invalid username or password",
      });
    }

    const accessToken = generateToken(existingUser.id);

    return res.status(200).json({
      message: "Logged in successfully",
      accessToken,
    });
  } catch (error) {
    console.log("Error while login : ", error);
    return res.status(500).json({
      message: "Something went wrong while login",
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    return res.status(200).json({
      user: req.user,
    });
  } catch (error) {
    console.log("Error while getting user profile : ", error);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const allowedUpdates = ["name", "username"];
    const updates = Object.keys(req.body);
    const areUpdatesValid = updates.every((update) => {
      if (!allowedUpdates.includes(update)) {
        return false;
      }
    });

    if (!areUpdatesValid) {
      return res.status(400).json({
        message: "Invalid updates",
      });
    }

    updates.forEach((update) => {
      req.user[update] = req.body[update];
    });

    if (req.file) {
      console.log("req.file.buffer", req.file.buffer);
    }

    await req.user.save();

    return res.status(200).json({
      message: "Profile updated successfully",
    });
  } catch (error) {
    console.log("Error while updating user profile : ", error);
    return res.status(500).json({
      message: "Something went wrong while updating profile",
    });
  }
};
