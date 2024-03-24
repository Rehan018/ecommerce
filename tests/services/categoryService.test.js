// tests/services/categoryService.test.js
const categoryService = require('../../services/categoryService.js');
const Category = require('../../models/Category.js');

// Mock Category model
jest.mock('../../models/Category.js');

describe('categoryService', () => {
  describe('getAllCategories', () => {
    it('should get all categories', async () => {
      // Mock Category.find to return a list of categories
      const categories = [{ name: 'Electronics', description: 'Category for electronic items' }];
      Category.find.mockResolvedValue(categories);

      // Call getAllCategories method
      const result = await categoryService.getAllCategories();

      // Verify that the result contains the list of categories
      expect(result.success).toBe(true);
      expect(result.categories).toEqual(categories);
    });
  });

  describe('createCategory', () => {
    it('should create a new category', async () => {
      // Mock Category.create to return a new category
      const newCategory = { name: 'Clothing', description: 'Category for clothing items' };
      Category.create.mockResolvedValue(newCategory);

      // Call createCategory method
      const result = await categoryService.createCategory(newCategory);

      // Verify that the result indicates success and contains the new category
      expect(result.success).toBe(true);
      expect(result.message).toBe('Category created successfully');
    });
  });
});
