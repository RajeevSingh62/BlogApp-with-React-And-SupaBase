import React from "react";
import Home from "./pages/Home";
import ProductCard from "./components/ProductCard";
import RegistrationForm from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/DashboardLayout/Profile";
import AllUsers from "./components/AllUsers";
import Productdetails from "./pages/Productdetails";
import DashboardLayout from "./pages/DashboardLayout/DashboardLayout";
import Wishlist from "./pages/DashboardLayout/Wishlist";
import Address from "./pages/DashboardLayout/Address";
import Orders from "./pages/DashboardLayout/Orders";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductCard />} />
          <Route path="/productdetails/:id" element={<Productdetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="addresses" element={<Address />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>

          <Route path="/allusers" element={<AllUsers />} />

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
