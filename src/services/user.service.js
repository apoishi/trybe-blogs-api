const jwtUtil = require('../utils/jwt.util');
const { User } = require('../models');

// Requirement 4
const findExistingEmail = async (email) => {
  const userEmail = await User.findOne({ where: { email } });
  return userEmail;
};

const createUser = async ({ displayName, email, password, image }) => {
const existingEmail = await findExistingEmail(email);
if (existingEmail) {
  return { type: 'ALREADY_EXISTS', message: 'User already registered' };
}
  await User.create({ displayName, email, password, image });
  const token = jwtUtil.createToken({ displayName, email, password, image });
  return { type: null, message: token };
};

// Requirement 5
const getUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};
// Requirement 6
const findById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: 'password ' } });
  if (!user) {
    return { type: 'NOT_FOUND', message: 'User does not exist' };
  }
  return { type: null, message: user };
};
    
  module.exports = {
    createUser,
    getUsers,
    findById,
  };