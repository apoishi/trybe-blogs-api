const categoryService = require('../services/category.service');
const { mapError } = require('../utils/errorMap');
const { validateCategory } = require('../validations/validateInputValues');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const error = validateCategory({ name });
  // console.log(mapError(error.type));
  if (error.type) return res.status(mapError(error.type)).json({ message: error.message });

  const newCategory = await categoryService.createCategory({ name });
  if (newCategory.type) {
    // console.log(mapError(newCategory.type));
    return res.status(mapError(newCategory.type)).json({ message: newCategory.message });
  }
  res.status(201).json(newCategory.message);
};

// Requirement 9
const getCategories = async (req, res) => {
  const categories = await categoryService.getCategories();
  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getCategories,
};