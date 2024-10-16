const authController = require("../Controller/authController");
const express = require("express");
const signUpRouter = express.Router();
const loginRouter = express.Router();
const updateImageRouter = express.Router();

signUpRouter
  .route("/")
  .post(authController.uploadImage.single("image"), authController.SignUp);
loginRouter.route("/").post(authController.Login);
loginRouter.route("/:_id").put(authController.updateUser);
loginRouter
  .route("/updatePasssword")
  .post(authController.Protect, authController.updatePassword);

updateImageRouter
  .route("/:_id")
  .put(authController.uploadImage.single("image"), authController.updateImage);

module.exports = { signUpRouter, loginRouter, updateImageRouter };
