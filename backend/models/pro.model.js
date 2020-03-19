const mongoose = require('mongoose');

const proSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  instrument: { type: String, required: true },
  genre: { type: String },
  email: { type: String },
  description: { type: String },
  image: { type: String },
  price: { type: String },
  rating: { type: String },
  featured: { type: Boolean },
});

module.exports = mongoose.model('Pro', proSchema);
