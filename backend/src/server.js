import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    await connectCloudinary();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server");
    console.error(error);
    process.exit(1);
  }
};

startServer();