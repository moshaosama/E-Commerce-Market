const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();
const productRouter = require("./Router/productRouter");
const authRouter = require("./Router/authRouter");
const reviewRouter = require("./Router/reviewRouter");
const { router } = require("./Router/CartRouter");

const Port = process.env.PORT || 3000;
// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
dotenv.config({ path: "./config.env" });
//

//Endpoint
app.use("/Product", productRouter.router);
app.use("/SignUp", authRouter.signUpRouter);
app.use("/Login", authRouter.loginRouter);
app.use("/Review", reviewRouter.reviewRouter);
app.use("/Cart", router);
app.use("/updateImage", authRouter.updateImageRouter);
//

//Connecton
mongoose
  .connect(
    process.env.DATABASE_NAME.replace("<password>", process.env.PASSWORD)
  )
  .then(() => {
    console.log("Connecton to database Success");
    app.listen(Port, () => {
      console.log("Listening on port " + Port);
    });
  })
  .catch(() => {
    console.log("Connecton to database Failure");
  });
//
