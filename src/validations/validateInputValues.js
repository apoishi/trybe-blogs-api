const { 
  loginSchema,
   newUserSchema, 
   categorySchema,
   postSchema,
   postUpdateSchema,
} = require('./schema');

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

// Requirement 8
const validateCategory = ({ name }) => {
  const { error } = categorySchema.validate({ name });
  if (error) return { type: 'INVALID_FIELDS', message: error.message };
  return { type: null, message: '' };
};

// Requirement 12
const validatePost = ({ title, content, categoryIds }) => {
const { error } = postSchema.validate({ title, content, categoryIds });
if (error) return { type: 'INVALID_VALUES', message: error.message };
return { type: null, message: '' };
};

const validatePostUpdate = ({ title, content }) => {
  const { error } = postUpdateSchema.validate({ title, content });
  if (error) return { type: 'INVALID_VALUES', message: error.message };
  return { type: null, message: '' };
  };

module.exports = {
validateBody,
validateUser,
validateCategory,
validatePost,
validatePostUpdate,
};