require("dotenv").config(); // load .env variables
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const { SECRET } = process.env;

module.exports = {
  async signUp(req, res) {
    try {
      const { email, username, password } = req.body;
      if (!email || !username || !password) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
      }

      req.body.password = await bcrypt.hash(req.body.password, 10);
      const user = await User.create(req.body);
      res.json(user);

    } catch (error) {
      console.error("SignUp Error:", error);
      res.status(500).json({ error: error.message || "Server error" });
    }
  },

  async logIn(req, res) {
    try {
      if (!req.body.email || !req.body.password) {
        return res.status(400).json({ error: "Missing email or password" });
      }
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res.status(400).json({ error: "User doesn't exist" });
      }
      const passwordMatches = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!passwordMatches) {
        return res.status(400).json({ error: "Password doesn't match" });
      }
      const token = jwt.sign({ email: user.email }, SECRET, {
        expiresIn: "1h",
      });
      res.json({
        token,
        user: {
          email: user.email,
          username: user.username, 
        },
      });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};
