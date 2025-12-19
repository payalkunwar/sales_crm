import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "demo-secret";

export default function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  // No token
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Format: Bearer TOKEN
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
