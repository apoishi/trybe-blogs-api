const { loginSchema, newUserSchema } = require('./schema');

// Requirement 3 
const validateBody = ({ email, password }) => {
  const { error } = loginSchema.validate({ email, password });
  if (error) return { type: 'MISSING_FIELDS', message: error.message };
  return { type: null, message: '' };
};

// Requirement 4
const validateUser = ({ displayName, email, password, image }) => {
  const { error } = newUserSchema.validate({ displayName, email, password, image });
  if (error) return { type: 'INVALID_FIELDS', message: error.message };
  return { type: null, message: '' };
};

module.exports = {
validateBody,
validateUser,
};