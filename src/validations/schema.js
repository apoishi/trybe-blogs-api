const Joi = require('joi');

const REQUIRED_MSG = 'Some required fields are missing';

// Requirement 3
const loginSchema = Joi.object({
  email: Joi.string().required()
    .messages({
      'string.required': REQUIRED_MSG,
      'string.empty': REQUIRED_MSG,
    }),
  password: Joi.string().required()
    .messages({
      'string.required': REQUIRED_MSG,
      'string.empty': REQUIRED_MSG,
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

// Requirement 12
const postSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': REQUIRED_MSG,
  }),
  content: Joi.string().required().messages({
    'string.empty': REQUIRED_MSG,
  }),
  categoryIds: Joi.array().items(Joi.number().min(1).required()).required().messages({
    'array.empty': REQUIRED_MSG,
    'string.empty': REQUIRED_MSG,
  }),
});

// Requirement 14
const postUpdateSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': REQUIRED_MSG,
  }),
  content: Joi.string().required().messages({
    'string.empty': REQUIRED_MSG,
  }),
});

module.exports = {
loginSchema,
newUserSchema,
categorySchema,
postSchema,
postUpdateSchema,
};
