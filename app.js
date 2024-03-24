const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);

const errorHandler = require('./utils/errorHandler');
app.use(errorHandler);

module.exports = app;