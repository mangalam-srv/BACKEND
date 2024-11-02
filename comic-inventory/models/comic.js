
const mongoose = require('mongoose');

const comicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  releaseDate: { type: Date },
  description: { type: String }
});

const Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;
