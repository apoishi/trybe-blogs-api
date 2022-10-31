const Joi = require('joi');
// Requirement 3
const loginSchema = Joi.object({
  email: Joi.string().required()
    .messages({
      'string.required': 'Some required fields are missing',
      'string.empty': 'Some required fields are missing',
    }),
  password: Joi.string().required()
    .messages({
      'string.required': 'Some required fields are missing',
      'string.empty': 'Some required fields are missing',
    }),
});

// Requirement 5
const newUserSchema = Joi.object({
  displayName: Joi.string().min(8).required()
    .messages({
      'string.required': '"displayName" length must be at least 8 characters long',
    }),
  email: Joi.string().email().required()
    .messages({
      'string.required': '"email" must be a valid email',
    }),
  password: Joi.string().min(6).required()
    .messages({
      'string.required': '"password" length must be at least 6 characters long"',
    }),
  image: Joi.string(),
});

// Requirement 8
const categorySchema = Joi.object({
  name: Joi.string().min(1).required()
  .messages({
    'string.required': '"name" is required',
    'string.empty': '"name" is required',
  }),
});

module.exports = {
loginSchema,
newUserSchema,
categorySchema,
};
