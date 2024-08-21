const express = require("express");
const router = express.Router();
const productController = require("../Controller/productController");
const authController = require("../Controller/authController");
const cartController = require("../Controller/productController");
const cartRouter = express.Router();

router.route("/").get(productController.getAllProduct);
router
  .route("/:id/:name")
  .get(authController.Protect, productController.getProductName);
router.route("/:_id").get(productController.getProduct);
module.exports = { router, cartRouter };
