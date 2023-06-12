import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
const salt = 10;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "server",
});

app.post("/register", (req, res) => {
  const sql = "INSERT INTO login ('name','email','password') VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error for Hassing Password" });
    const values = [req.body.name, req.body.email, hash];
    db.query(sql, [values], (err, result) => {
      if (err) return res.json({ Error: "Inserting data Error in Server" });
      return res.json({ Status: "Succes" });
    });
  });
});

app.listen(8801, () => {
  console.log("App Running on Port 8801 . . .");
});
