const { Router } = require("express");
const { isLoggedIn } = require("../middlewares/middlewares");

const {
  getUserPosts,
  getAllPosts,
  createPost,
  getPost,
} = require("../controllers/post-controlls");

const router = Router();

router.get("/", isLoggedIn, getAllPosts);
router.get("/user-posts", isLoggedIn, getUserPosts);
router.post("/", isLoggedIn, createPost);
router.get("/:id", isLoggedIn, getPost);


module.exports = router;
