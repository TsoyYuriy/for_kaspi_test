const Post = require("../models/Post");

module.exports = {
  async getAllPosts(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  
  },

  async getUserPosts(req, res) {
    const { email } = req.user; 

    try {
      const posts = await Post.find({ email });
      res.status(200).json(posts);
    } catch (err) {
      res.status(400).json({ err });
    }
  },

  async getPost(req, res) {
    const _id = req.params.id;

    try {
      const post = await Post.findById(_id);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async createPost (req, res) {
    const { email } = req.user; 
    req.body.email = email; 

    try {
      const post = await Post.create(req.body)
      res.status(200).json({ post })

    } catch (err) {
      res.status(400).json({ err })
    }
  },
};
