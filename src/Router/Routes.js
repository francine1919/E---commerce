import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login"
import SignUp from "../Pages/SignUp/SignUp";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Cart from "../Pages/Cart/Cart";
import OrderConfirmed from "../Pages/OrderConfirmed/OrderConfirmed";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/products" element={<ProductsPage />} />
          <Route
            exact
            path="/product-details/:id"
            element={<ProductDetails />}
          />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/order-confirmed" element={<OrderConfirmed />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
