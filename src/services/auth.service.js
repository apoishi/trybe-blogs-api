const jwtUtil = require('../utils/jwt.util');

const { User } = require('../models');

// Requirement 3 
const validateLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return { type: 'INVALID_FIELDS', message: 'Invalid fields' };
  }

  const { password: _, ...userWithoutPassword } = user.dataValues;

  const token = jwtUtil.createToken(userWithoutPassword);
  return { type: null, message: token };
};

// Rquirement 5
const validateToken = (token) => {
  if (!token) return { type: 'INVALID_TOKEN', message: 'Token not found' };
  const result = jwtUtil.validateToken(token);
  return result;
};

module.exports = {
  validateLogin,
  validateToken,
};