const { Cart } = require("../Models/cartModel");
const { Product } = require("../Models/productModel");
const { v4: uuidv4 } = require("uuid");

exports.addCart = async (req, res, next) => {
  try {
    const id = req.params._id;

    // Fetch the product details
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Create a new cart entry with a unique ID
    const cart = new Cart({
      data: product,
    });

    // Save the cart to the database
    await cart.save();

    res.status(200).json({
      message: "Cart created successfully",
      cart,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    }); // Pass the error to the error-handling middleware
  }
};

exports.getAllCarts = async (req, res, next) => {
  const carts = await Cart.find();
  res.status(200).json({
    status: "OK",
    data: carts,
  });
};

exports.deleteCart = async (req, res, next) => {
  try {
    const id = req.params._id;
    const delCart = await Cart.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      message: "Deleted Success",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
