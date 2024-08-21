const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Please enter a valid name"],
  },
  Title: {
    type: String,
    required: [true, "Please enter a valid title"],
  },
  Review: {
    type: String,
    required: [true, "Please enter a valid review"],
  },
  Date: {
    type: Date,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = { Review };
