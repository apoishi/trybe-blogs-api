const { postService } = require('../services');
const { validatePost } = require('../validations/validateInputValues');
const { mapError } = require('../utils/errorMap');

// Requirement 12
const createPost = async (req, res) => {
  const error = validatePost(req.body);
  if (error.type) return res.status(mapError(error.type)).json({ message: error.message });

  const post = await postService.createPost(req.body, req.user);
  if (post.type) return res.status(mapError(post.type)).json({ message: post.message });
  res.status(201).json(post);
};

const getPosts = async (_req, res) => {
  const blogPosts = await postService.getPosts();
  return res.status(200).json(blogPosts);
};

module.exports = {
  createPost,
  getPosts,
};