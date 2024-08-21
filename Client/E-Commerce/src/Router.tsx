import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Miscellaneous from "./Components/Miscellaneous";
import Electronics from "./Components/Electronics";
import Shoes from "./Components/Shoes";
import Furniture from "./Components/Furniture";
import Clothes from "./Components/Clothes";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Product from "./Components/Product";
import Profile from "./Components/Profile";
import ResetPass from "./Components/resetPass";
import Cart from "./Components/Cart";

function Router_Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Miscellaneous" element={<Miscellaneous />}></Route>
        <Route path="/Electronics" element={<Electronics />}></Route>
        <Route path="/Shoes" element={<Shoes />}></Route>
        <Route path="/Furniture" element={<Furniture />}></Route>
        <Route path="/Clothes" element={<Clothes />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Product/:_id/:name" element={<Product />}></Route>
        <Route path="/myProfile" element={<Profile />}></Route>
        <Route path="/resetPassword" element={<ResetPass />}></Route>
        <Route path="/Carts" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default Router_Pages;
