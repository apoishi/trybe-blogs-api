const { Category } = require('../models');

// Requirement 8

const findExistingCategory = async (name) => {
  const userEmail = await Category.findOne({ where: { name } });
  return userEmail;
};

const createCategory = async ({ name }) => {
  const existingCategory = await findExistingCategory(name);
  if (existingCategory) {
    return { type: 'ALREADY_EXISTS', message: 'Category already registered' };
  }
 const result = await Category.create({ name });
  return { type: null, message: result };
};

module.exports = {
  createCategory,
};