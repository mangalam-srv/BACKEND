
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const comicRoutes = require('./routes/comicroutes.js');

const app = express();
const PORT = process.env.PORT || 5000;


connectDB();


app.use(express.json());


app.use('/api/comics', comicRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
