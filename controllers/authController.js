const authService = require("../services/authService");

const authController = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const result = await authService.registerUser({
        username,
        email,
        password,
      });
      if (result.success) {
        res.status(201).json({ success: true, message: result.message });
      } else {
        res.status(400).json({ success: false, error: result.error });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await authService.loginUser(email, password);
      if (result.success) {
        res.status(200).json({ success: true, message: result.message });
      } else {
        res.status(401).json({ success: false, message: result.message });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
};

module.exports = authController;
