const express = require('express');
const userController = require('../controllers/user.controller');

const { validateToken } = require('../middlewares/auth.middleware');

const router = express.Router();

// Requirement 4
router.post('/', userController.createUser);

router.get('/', validateToken, userController.getUsers);
router.get('/:id', validateToken, userController.findById);

module.exports = router;
