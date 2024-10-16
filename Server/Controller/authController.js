const { User } = require("../Models/AuthModel");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      "/Users/Mohamed/Desktop/Project Node js/E-coomerec Market/Client/E-Commerce/public"
    );
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

exports.uploadImage = multer({ storage });

exports.SignUp = async (req, res, next) => {
  try {
    const user = new User({
      userName: req.body.userName,
      Email: req.body.Email,
      Password: req.body.Password,
      PasswordConfirmation: req.body.PasswordConfirmation,
    });

    await user.save();

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.Login = async (req, res, next) => {
  const { Email, Password } = req.body;
  if (!Email && !Password) {
    return res.status(403).json({
      status: "error",
      message: "Please Enter Your Email and Password",
    });
  }

  const user = await User.findOne({ Email: Email });

  if (!(await bcrypt.compare(Password, user?.Password))) {
    return res.status(403).json({
      status: "error",
      message: "Password is not valid",
    });
  }

  if (!user) {
    return res.status(403).json({
      status: "error",
      message: "you don't have any account",
    });
  }
  const Token = await JWT.sign({ id: user._id }, process.env.SECRET_KEY);
  res.status(200).json({
    status: "success",
    Token: Token,
    data: user,
  });
};

exports.Protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization;
  }

  res.cookie("token", token);
  if (!token) {
    return res.status(404).json({
      status: "error",
      message: "you don't have a valid token",
    });
  }
  const decoded = await JWT.verify(token, process.env.SECRET_KEY);
  if (!decoded) {
    return res.status(404).json({
      status: "error",
      message: "you don't have any User by this Token",
    });
  }
  const users = await User?.findOne({ _id: decoded.id });
  if (!users) {
    return res.status(404).json({
      status: "error",
      message: "you don't have any User by this Token",
    });
  }
  req.user = users;
  next();
};

exports.updateUser = async (req, res, next) => {
  const id = req.params._id;
  const { name, email } = req.body;
  if (!name | !email) {
    return res.status(404).json({
      status: "error",
      message: "please enter your email and password and Name",
    });
  }
  const updateUsers = await User.findByIdAndUpdate(
    id,
    {
      userName: name,
      Email: email,
    },
    {
      new: true,
    }
  );
  res.status(200).json({
    status: "success",
    data: updateUsers,
  });
};

exports.updatePassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    const currentPassword = req.body.currentPassword;
    if (!currentPassword) {
      return res.status(404).json({
        status: "error",
        message: "Please enter your current password",
      });
    }
    if (!(await bcrypt.compare(currentPassword, user.Password))) {
      return res.status(404).json({
        status: "error",
        message: "your Password is not Correct",
      });
    }
    user.Password = req.body.newPassword;
    user.PasswordConfirmation = req.body.passConf;

    await user.save();

    res.status(200).json({
      status: "success",
      messgae: "Your password is updated Successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.updateImage = async (req, res, next) => {
  try {
    const _id = req.params._id;
    const updateImage = await User.findByIdAndUpdate(
      _id,
      {
        image: req.file?.filename,
      },
      {
        new: true,
      }
    );

    if (!updateImage) {
      return res.status(404).json({
        status: "fail",
        message: "Image not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: updateImage,
    });
  } catch (err) {
    res.status(404).json({
      status: "error",
      message: err.message,
    });
  }
};
