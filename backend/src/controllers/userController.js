import validator from "validator";

import userModel from "../models/userModel.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import generateToken from "../utils/generateToken.js";

// @desc    Register a new user
// @route   POST /api/user/register
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name?.trim() || !email?.trim() || !password) {
    throw new ApiError(400, "Name, email, and password are all required.");
  }

  if (!validator.isEmail(email)) {
    throw new ApiError(400, "Please provide a valid email address.");
  }

  if (password.length < 8) {
    throw new ApiError(400, "Password must be at least 8 characters long.");
  }

  const existingUser = await userModel.findOne({
    email: email.toLowerCase(),
  });

  if (existingUser) {
    throw new ApiError(409, "An account with this email already exists.");
  }

  // Password hashing happens automatically via the pre("save") hook on
  // the model — never hash it manually here too, that would double-hash it.
  const user = await userModel.create({ name: name.trim(), email, password });

  generateToken(res, { id: user._id });

  res.status(201).json({
    success: true,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});

// @desc    Log in an existing user
// @route   POST /api/user/login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email?.trim() || !password) {
    throw new ApiError(400, "Email and password are required.");
  }

  const user = await userModel.findOne({ email: email.toLowerCase() });

  // Deliberately the same error whether the email doesn't exist or the
  // password is wrong. Returning a different message for "no such user"
  // vs "wrong password" lets an attacker enumerate which emails have
  // accounts on the site.
  if (!user || !(await user.comparePassword(password))) {
    throw new ApiError(401, "Invalid email or password.");
  }

  generateToken(res, { id: user._id });

  res.json({
    success: true,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
  });
});

// @desc    Log in as admin using env-configured credentials
// @route   POST /api/user/admin
const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email?.trim() || !password) {
    throw new ApiError(400, "Email and password are required.");
  }

  const isValidEmail = email === process.env.ADMIN_EMAIL;
  const isValidPassword = password === process.env.ADMIN_PASSWORD;

  if (!isValidEmail || !isValidPassword) {
    throw new ApiError(401, "Invalid admin credentials.");
  }

  // Separate cookie name from the regular user token, and a distinct
  // "role" claim, so admin-only middleware can check for it later.
  generateToken(res, { role: "admin" }, "admin_token");

  res.json({ success: true });
});

export { loginUser, registerUser, adminLogin };
