// routes/comicRoutes.js
const express = require('express');
const router = express.Router();
const comicController = require('../controllers/comicController');

// CRUD Routes
router.post('/', comicController.createComic);         // Create a comic
router.get('/', comicController.getAllComics);         // Get all comics
router.put('/:id', comicController.updateComic);       // Update a comic by ID
router.delete('/:id', comicController.deleteComic);    // Delete a comic by ID

module.exports = router;
