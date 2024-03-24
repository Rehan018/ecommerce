const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config/config');

// Database connection
mongoose.connect(config.database.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true,
})
.then(() => {
  console.log('Connected to the database');
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error('Error connecting to the database:', error);
});
