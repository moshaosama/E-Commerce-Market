const express = require("express");
const reviewRouter = express.Router();
const reviewController = require("../Controller/reviewController");
const authcontroller = require("../Controller/authController");

reviewRouter
  .route("/")
  .post(reviewController.createReview)
  .get(authcontroller.Protect, reviewController.getAllReviews);
reviewRouter.route("/:_id").delete(reviewController.deleteReview);
module.exports = { reviewRouter };
