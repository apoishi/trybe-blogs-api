const { loginSchema } = require('./schema');

// Requirement 3 
const validateBody = ({ email, password }) => {
  const { error } = loginSchema.validate({ email, password });
  if (error) return { type: 'MISSING_FIELDS', message: error.message };
  return { type: null, message: '' };
};

module.exports = {
validateBody,
};