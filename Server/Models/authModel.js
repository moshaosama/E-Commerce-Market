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
    default: () =>
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMUDp3aV5EOTHgkQp6AB782rSKOyhhkdkx8Q&s",
  },
});

userSchema.pre("save", async function (next) {
  this.Password = await bcrypt.hash(this.Password, 12);
  this.PasswordConfirmation = undefined;
  next();
});

exports.User = mongoose.model("User", userSchema);
