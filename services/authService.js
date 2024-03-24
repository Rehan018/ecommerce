const User = require('../models/User');

const authService = {
  registerUser: async (userData) => {
    try {
      const newUser = new User(userData);
      await newUser.save();
      return { success: true, message: 'User registered successfully' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  loginUser: async (email, password) => {
    try {
      const user = await User.findOne({ email });
      if (!user || user.password !== password) {
        return { success: false, message: 'Invalid credentials' };
      }
      return { success: true, message: 'User logged in successfully', user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
};

module.exports = authService;
