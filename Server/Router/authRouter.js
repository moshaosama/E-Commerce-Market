const authController = require("../Controller/authController");
const express = require("express");
const signUpRouter = express.Router();
const loginRouter = express.Router();

signUpRouter.route("/").post(authController.SignUp);
loginRouter.route("/").post(authController.Login);
loginRouter.route("/:_id").put(authController.updateUser);
loginRouter
  .route("/updatePasssword")
  .post(authController.Protect, authController.updatePassword);

module.exports = { signUpRouter, loginRouter };
