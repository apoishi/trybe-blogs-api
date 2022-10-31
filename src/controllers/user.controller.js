const userService = require('../services/user.service');
const { mapError } = require('../utils/errorMap');
const { validateUser } = require('../validations/validateInputValues');

// Requirement 4
const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const body = await validateUser({ displayName, email, password, image });
  if (body.type) return res.status(mapError(body.type)).json({ message: body.message });

  const newUser = await userService.createUser({ displayName, email, password, image });
  if (newUser.type) return res.status(mapError(newUser.type)).json({ message: newUser.message });
  return res.status(201).json(newUser.message);
};

// Requirement 5
const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  return res.status(200).json(users);
};

// Requirement 6
const findById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.findById(id);
  if (user.type) return res.status(mapError(user.type)).json({ message: user.message });
  return res.status(200).json(user.message);
};

module.exports = {
  createUser,
  getUsers,
  findById,
};