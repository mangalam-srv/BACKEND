// app.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const comicRoutes = require('./routes/comicroutes.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/comics', comicRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
