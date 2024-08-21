const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");


const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please enter your name"],
    unique: true,
  },
  Email: {
    type: String,
    required: [true, "Please enter your Email"],
    unique: true,
    validate: [validator.isEmail],
  },
  Password: {
    type: String,
    required: [true, "Please enter your Password"],
  },
  PasswordConfirmation: {
    type: String,
    required: [true, "Please enter your PasswordConfirmation"],
    validate: {
      validator: function (el) {
        return el === this.Password;
      },
    },
  },
  image: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  this.Password = await bcrypt.hash(this.Password, 12);
  this.PasswordConfirmation = undefined;
  next();
});

exports.User = mongoose.model("User", userSchema);
