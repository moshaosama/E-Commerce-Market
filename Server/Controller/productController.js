const { query } = require("express");
const { Product } = require("../Models/productModel");

exports.getAllProduct = async (req, res, next) => {
  setTimeout(async () => {
    const allProduct = await Product.find();
    if (!allProduct) {
      return res.status(404).json({
        status: "Error",
        message: "Product not found",
      });
    }
    res.status(200).json({
      status: "OK",
      result: allProduct.length,
      data: allProduct,
    });
  }, 2000);
};

exports.getProduct = async (req, res, next) => {
  const id = req.params._id;
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({
      status: "Error",
      message: "Product not found",
    });
  }
  res.status(200).json({
    status: "OK",
    data: product,
  });
};

exports.getProductName = async (req, res, next) => {
  const name = req.params.name;
  const products = await Product?.find({ "category.name": name }).limit(4);
  if (!products) {
    return res.status(404).json({
      status: "fail",
      message: "Product name is not found",
    });
  }
  res.status(200).json({
    status: "OK",
    data: products,
  });
};
