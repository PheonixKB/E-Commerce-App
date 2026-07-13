import jwt from "jsonwebtoken";

const COOKIE_MAX_AGE = 7 * 24 * 60 * 60 * 1000; // 7 days, matches token expiry below

// Signs a JWT and sets it as an httpOnly cookie — never returned in the
// JSON body. An httpOnly cookie can't be read by JavaScript, so a
// malicious script injected via XSS can't steal it the way it could
// steal a token sitting in localStorage.
const generateToken = (res, payload, cookieName = "token") => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie(cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
  });

  return token;
};

export default generateToken;
