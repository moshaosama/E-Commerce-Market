const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true],
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  images: [],
  creationAt: {
    type: String,
  },
  updatedAt: {
    type: String,
  },
  category: {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    creationAt: {
      type: String,
    },
    updatedAt: {
      type: String,
    },
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
