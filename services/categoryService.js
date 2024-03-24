const Category = require('../models/Category');

const categoryService = {
  getAllCategories: async () => {
    try {
      const categories = await Category.find();
      return { success: true, categories };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  createCategory: async (categoryData) => {
    try {
      const newCategory = new Category(categoryData);
      await newCategory.save();
      return { success: true, message: 'Category created successfully' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
};

module.exports = categoryService;
