import express from "express";
import rateLimit from "express-rate-limit";

import {
  loginUser,
  registerUser,
  adminLogin,
} from "../controllers/userController.js";

const userRouter = express.Router();

// Auth endpoints get a much tighter limit than the app's global rate
// limiter, since they're the most attractive target for scripted
// brute-force/credential-stuffing attempts.
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many attempts. Please try again later.",
  },
});

userRouter.post("/register", authLimiter, registerUser);
userRouter.post("/login", authLimiter, loginUser);
userRouter.post("/admin", authLimiter, adminLogin);

export default userRouter;
