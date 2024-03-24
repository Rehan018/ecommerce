// tests/services/authService.test.js
const authService = require('../../services/authService');
const User = require('../../models/User');

// Mock User model
jest.mock('../../models/User.js');

describe('authService', () => {
  describe('registerUser', () => {
    it('should register a new user', async () => {
      // Mock User.findOne to return null (indicating user does not exist)
      User.findOne.mockResolvedValue(null);
      
      // Mock User.create to return a new user
      const newUser = { username: 'testuser', email: 'testuser@example.com', password: 'password123' };
      User.create.mockResolvedValue(newUser);

      // Call registerUser method
      const result = await authService.registerUser(newUser);

      // Verify that the result indicates success and contains the new user
      expect(result.success).toBe(true);
      expect(result.message).toBe('User registered successfully');
    });
  });

  describe('loginUser', () => {
    it('should login an existing user', async () => {
      // Mock User.findOne to return an existing user
      const existingUser = { username: 'testuser', email: 'testuser@example.com', password: 'password123' };
      User.findOne.mockResolvedValue(existingUser);

      // Call loginUser method
      const result = await authService.loginUser('testuser@example.com', 'password123');

      // Verify that the result indicates success and contains the existing user
      expect(result.success).toBe(true);
      expect(result.message).toBe('User logged in successfully');
      expect(result.user).toEqual(existingUser);
    });

    it('should return an error if user does not exist', async () => {
      // Mock User.findOne to return null (indicating user does not exist)
      User.findOne.mockResolvedValue(null);

      // Call loginUser method with non-existing user credentials
      const result = await authService.loginUser('nonexisting@example.com', 'password123');

      // Verify that the result indicates failure with appropriate error message
      expect(result.success).toBe(false);
      expect(result.message).toBe('Invalid credentials');
    });
  });
});
