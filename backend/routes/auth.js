import express from "express";
import bcrypt from "bcrypt";
import pool from "./db.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  await pool.query(
    "INSERT INTO users(email,password_hash) VALUES($1,$2)",
    [email, hash]
  );

  res.json({
    success: true
  });
});

export default router;