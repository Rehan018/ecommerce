const authController = require('../../controllers/authController.js');
const authService = require('../../services/authService.js');
jest.mock('../../services/authService.js');

describe('authController', () => {
  describe('register', () => {
    it('should register a new user', async () => {
      const req = {
        body: { username: 'testuser', email: 'testuser@example.com', password: 'password123' }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      authService.registerUser.mockResolvedValue({ success: true, message: 'User registered successfully' });
      await authController.register(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ success: true, message: 'User registered successfully' });
    });
  });

  describe('login', () => {
    it('should login an existing user', async () => {
      const req = {
        body: { email: 'testuser@example.com', password: 'password123' }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      authService.loginUser.mockResolvedValue({ success: true, message: 'User logged in successfully' });

      await authController.login(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ success: true, message: 'User logged in successfully' });
    });
  });
});
