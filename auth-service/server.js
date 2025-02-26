const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const users = [{ id: 1, username: "kuldeep", password: "123456" }];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  const token = jwt.sign({ userId: user.id }, "secret-key", { expiresIn: "1h" });
  res.json({ token });
});

app.listen(5000, () => console.log("Auth service running on port 5000"));
