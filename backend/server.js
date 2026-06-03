const express = require("express");
const bcrypt = require("bcrypt");
const pool = require("./db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/api/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users(email, password_hash) VALUES($1, $2)",
      [email, hash]
    );

    res.json({
      success: true,
      message: "User created"
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});