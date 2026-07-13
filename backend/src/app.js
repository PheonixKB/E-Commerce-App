import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import errorHandler from "./middleware/errorHandler.js";

const app = express();

// ==========================
// Security & parsing middleware
// ==========================

app.use(helmet());

// credentials: true is required for httpOnly auth cookies to be sent/
// received cross-origin. When this is on, `origin` can't be "*" — it
// must be the exact frontend URL, or the browser will silently refuse
// to attach the cookie.
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Blanket protection against brute-force / scripted abuse. Login gets
// its own stricter limiter later, on top of this.
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(globalLimiter);

// ==========================
// Routes
// ==========================

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Route modules get mounted here as they're built, e.g.:
// import authRoutes from "./routes/auth.routes.js";
// app.use("/api/auth", authRoutes);

// ==========================
// Error handling (must be last)
// ==========================

app.use(errorHandler);

export default app;
