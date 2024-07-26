require("dotenv").config();
const jwt = require("jsonwebtoken");

const { SECRET } = process.env;

module.exports = {
  async isLoggedIn(req, res, next) {
    try {
      if (!req.headers.authorization)
        res.status(400).json({ error: "No authorization header" });

      const token = req.headers.authorization.split(" ")[1];

      if (!token) res.status(400).json({ error: "malformed auth header" });

      const payload = await jwt.verify(token, process.env.SECRET);

      if (!payload)
        res.status(400).json({ error: "token verification failed" });

      req.user = payload;
      next();
    } catch (e) {
      res.status(400).json({ e });
    }
  },
};
