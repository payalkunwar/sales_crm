import jwt from "jsonwebtoken";


const users = [];
let nextUserId = 1;
const SECRET = process.env.JWT_SECRET || "demo-secret";

export const login = async (req, res) => {
  const { email, name } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  let user = users.find((u) => u.email === email);

  if (!user) {
    user = {
      id: String(nextUserId++),
      email,
      name: name || email.split("@")[0],
    };
    users.push(user);
  }

  const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "1d" });

  res.json({ token, user });
};
