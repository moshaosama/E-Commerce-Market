const express = require("express");

const router = express.Router();
const cartController = require("../Controller/cartController");
const authController = require("../Controller/authController");

router
  .route("/:_id")
  .post(authController.Protect, cartController.addCart)
  .delete(cartController.deleteCart);
router.route("/").get(authController.Protect, cartController.getAllCarts);

module.exports = { router };
