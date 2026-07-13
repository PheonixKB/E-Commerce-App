// Express doesn't automatically forward rejected promises from async
// route handlers to the error-handling middleware. Wrapping every
// controller in this means you can just `throw` inside an async
// function instead of remembering try/catch + next(err) everywhere.
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
