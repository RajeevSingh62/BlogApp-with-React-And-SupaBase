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
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";  
import AuthGuard from "./utils/AuthGuard";
import BlogList from "./components/Blogs/BlogList";
import Blogdetails from "./components/Blogs/Blogdetails";
import AdminDashboard from "./components/admin/AdminDashboard";
import AddProducts from "./components/admin/AddProducts";
import CreateBlogs from './components/Blogs/CreateBlogs';
import BlogAdmin from './components/Blogs/BlogAdmin';

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
       
          <Route path="blogs" element={<BlogList/>}/>
          <Route path="/blogs/:id" element={<Blogdetails/>}/>
         
           


          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="addresses" element={<Address />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
            <Route path="/admindashboard" element={<AdminDashboard />}>
               <Route path="allusers" element={<AllUsers />} />
               <Route path="addproduct" element={<AddProducts/>} />
                <Route path="createblogs" element={<CreateBlogs/>}/>
                <Route path="blogadmin" element={<BlogAdmin/>}/>

       
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
        <ToastContainer position="top-right" autoClose={3000} /> 
    </BrowserRouter>
  );
};

export default App;
