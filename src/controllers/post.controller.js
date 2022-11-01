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
  const posts = await postService.getPosts();
  return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await postService.getPostById(id);
  if (type) return res.status(mapError(type)).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
};