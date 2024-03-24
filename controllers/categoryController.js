const categoryService = require("../services/categoryService");

const categoryController = {
  getAllCategories: async (req, res) => {
    try {
      const result = await categoryService.getAllCategories();
      if (result.success) {
        res.status(200).json(result.categories);
      } else {
        res.status(500).json({ error: result.error });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createCategory: async (req, res) => {
    try {
      const { name, description } = req.body;
      const result = await categoryService.createCategory({
        name,
        description,
      });
      if (result.success) {
        res
          .status(201)
          .json({ message: result.message, category: result.category });
      } else {
        res.status(400).json({ error: result.error });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = categoryController;
