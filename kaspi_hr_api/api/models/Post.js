const { Schema, model } = require("../db/connection"); // import Schema & model

// User Schema
const PostSchema = new Schema({
  email: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  image: { type: String, required: true },
});

// User model
const Post = model("Post", PostSchema);

module.exports = Post;
