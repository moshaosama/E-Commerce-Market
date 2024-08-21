const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  id: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(), // Generate a unique ID by default
  },
  data: [],
});

exports.Cart = mongoose.model("Cart", cartSchema);
