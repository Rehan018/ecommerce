const jwt=require('jsonwebtoken');
const config=require('../config/config');
const User=require('../models/User');

const authMiddleware = async (req, res, next) => {
    try {
      // Check if Authorization header is present
      const token = req.header('Authorization');
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Missing token' });
      }
  
      // Verify JWT token
      const decoded = jwt.verify(token, config.jwtSecret);
      const user = await User.findById(decoded.userId);
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
      }
  
      // Attach user object to request for further processing
      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
  };
  
  module.exports = authMiddleware;