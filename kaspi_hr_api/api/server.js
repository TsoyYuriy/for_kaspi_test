require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { log } = require("mercedlogger");
const cors = require("cors");
const userRouter = require("./routes/User");
const postRouter = require("./routes/Post");

const app = express();
const { PORT } = process.env;

// GLOBAL MIDDLEWARE
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json()); 

// ROUTES AND ROUTES
app.get("/", (req, res) => {
  res.send("this is the test route to make sure server is working");
});

app.use("/user", userRouter);
app.use("/posts", postRouter);

// APP LISTENER
app.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`));
