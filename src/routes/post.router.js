const express = require('express');
const postController = require('../controllers/post.controller');
const { validateToken } = require('../middlewares/auth.middleware');

const router = express.Router();
// Requirement 8
router.post('/', validateToken, postController.createPost);

module.exports = router;