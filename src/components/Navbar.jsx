import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/auth/AuthSlice";
function Navbar() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const logoutuser=()=>{
    dispatch(logout())  
    navigate("/login")
  }
 const[showModal,setShowModal]=useState(false)
 const user=useSelector((state)=>state.auth.users)
  console.log("logged in user",user)

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      top: "0",
      position: "fixed",
      backgroundColor: "skyblue", 
    
      width: "100%",
      height:"7vh",
        paddingRight:"20px"
    }}>
      
      {/* Logo */}
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>
        MyShop
      </div>

      {/* Search Bar */}
      <div>
        <input 
          type="text" 
          placeholder="Search..." 
          style={{ padding: "5px 10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "15px", alignItems: "center" , marginRight:"20px"}}>
        <a href="/add-product" style={{ textDecoration: "none", color: "#333" }}>Add Product</a>
        <Link to="/allusers" style={{ textDecoration: "none", color: "#333" }}>AllUsers</Link>

        <a href="/cart" style={{ textDecoration: "none", color: "#333" }}>Cart</a>

        <button style={{ textDecoration: "none", color: "#333" }} onClick={()=>setShowModal(true)}>Profile</button>
        {/* <Link to="/profile" style={{ textDecoration: "none", color: "#333" }} onClick={()=>setShowModal(true)}>Profile</Link> */}

          {showModal && (
            <div>
              <h4>modal is here</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quaerat?</p>
              <button onClick={()=>setShowModal(false)}>close</button>
            </div>
            
          )}

        <button style={{ padding: "5px 10px", backgroundColor: "#333", color: "white", border: "none", borderRadius: "5px" }}>
          Dark Mode
        </button>
        <button style={{ padding: "5px 10px", backgroundColor: "red", color: "white", border: "none", borderRadius: "5px",cursor:"pointer" }} onClick={logoutuser}>
          Logout
        </button>
      </div>

    </div>
  );
}

export default Navbar;

