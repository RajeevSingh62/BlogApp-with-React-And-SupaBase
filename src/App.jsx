import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import RegistrationForm from "./pages/Register";
import Home from "./pages/Home";
import ProductCard from "./components/ProductCard";
import Productdetails from "./pages/Productdetails";
import DashboardLayout from "./pages/DashboardLayout/DashboardLayout";
import Profile from "./pages/DashboardLayout/Profile";
import Orders from "./pages/DashboardLayout/Orders";
import Address from "./pages/DashboardLayout/Address";
import Wishlist from "./pages/DashboardLayout/Wishlist";
import AllUsers from "./components/AllUsers";
import Navbar from "./components/Navbar";
import AuthGuard from "./utils/AuthGuard";

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />

        {/* Protected Routes */}
        <Route element={<AuthGuard />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductCard />} />
          <Route path="/productdetails/:id" element={<Productdetails />} />
          <Route path="/allusers" element={<AllUsers />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="addresses" element={<Address />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
