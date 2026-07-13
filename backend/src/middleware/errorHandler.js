// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  // Never leak stack traces or internal details to the client in
  // production — log them server-side instead.
  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal server error",
  });
};

export default errorHandler;
