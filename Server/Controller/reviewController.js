const express = require("express");
const { Review } = require("../Models/ReviewModel");
const app = express();

exports.createReview = async (req, res, next) => {
  const review = new Review({
    Name: req.body.name,
    Title: req.body.title,
    Review: req.body.review,
    Date: Date.now(),
  });
  await review.save();
  if (!review) {
    return res.status(404).json({
      status: "Error",
      message: "Invalid review",
    });
  }
  res.status(200).json({
    status: "success",
    data: review,
  });
};

exports.getAllReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    if (!reviews) {
      return res.status(404).json({
        status: "Error",
        message: "you don't have any reviews",
      });
    }
    res.status(200).json({
      status: "Success",
      result: reviews.length,
      data: reviews,
    });
  } catch (err) {
    return res.status(404).json({
      status: "Error",
      message: err.message,
    });
  }
};

exports.deleteReview = async (req, res, next) => {
  try {
    const id = req.params._id;
    const deleteReview = await Review.findByIdAndDelete(id);
    res.status(204).json({
      status: "success",
      message: "Review deleted successfully",
    });
  } catch (err) {
    res.status(404).json({
      status: "Error",
      message: err.message,
    });
  }
};
