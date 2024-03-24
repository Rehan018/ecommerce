
const categoryController = require('../../controllers/categoryController.js');
const Category = require('../../models/Category.js');
jest.mock('../../models/Category.js');

describe('categoryController', () => {
    describe('getAllCategories', () => {
      it('should get all categories', async () => {
        // Mock Category.find to return a list of categories
        const categories = [{ name: 'Electronics', description: 'Category for electronic items' }];
        Category.find.mockResolvedValue(categories);
  
        // Mock Express response object
        const res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn()
        };
  
        // Call getAllCategories method
        await categoryController.getAllCategories({}, res);
  
        // Verify that res.json is called with the list of categories
        expect(res.json).toHaveBeenCalledWith(categories);
      });
    });
  
    describe('createCategory', () => {
      it('should create a new category', async () => {
        // Mock Express request object
        const req = {
          body: { name: 'Clothing', description: 'Category for clothing items' }
        };
  
        // Mock Category.create to return the new category
        const newCategory = { name: 'Clothing', description: 'Category for clothing items' };
        Category.create.mockResolvedValue(newCategory);
  
        // Mock Express response object
        const res = {
          status: jest.fn().mockReturnThis(),
          json: jest.fn()
        };
  
        // Call createCategory method
        await categoryController.createCategory(req, res);
  
        // Verify that res.json is called with success message and the new category
        expect(res.json).toHaveBeenCalledWith({ message: 'Category created successfully', category: newCategory });
      });
    });
  });