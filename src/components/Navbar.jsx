import React from "react";

function Navbar() {
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
        <a href="/cart" style={{ textDecoration: "none", color: "#333" }}>Cart</a>
        <a href="/profile" style={{ textDecoration: "none", color: "#333" }}>Profile</a>
        <button style={{ padding: "5px 10px", backgroundColor: "#333", color: "white", border: "none", borderRadius: "5px" }}>
          Dark Mode
        </button>
        <button style={{ padding: "5px 10px", backgroundColor: "red", color: "white", border: "none", borderRadius: "5px" }}>
          Logout
        </button>
      </div>

    </div>
  );
}

export default Navbar;

