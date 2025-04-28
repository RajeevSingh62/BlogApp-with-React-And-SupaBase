import React from "react";
import { registerUser } from "../redux/features/auth/AuthThunks";
import { useDispatch } from "react-redux";
import supabase from "../services/supabaseClient";

const RegistrationForm = () => {

    const dispatch=useDispatch();

const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");       
const [password, setPassword] = React.useState("");
const [role, setRole] = React.useState("");

const handleRegister = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
      role
    };
    console.log("User Data", userData);
  
    const authUser = await dispatch(registerUser(userData));  // ✅ wait for dispatch to complete
  
    alert("Registration successful!");
  
    await supabase.from('users').insert([
      {
        id: authUser?.user?.id, 
        email: email,
        full_name: name,
        role: role,
      }
    ]);
  
    setName("");
    setEmail("");
    setPassword("");
    setRole("");
  };
  


  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
      
      <form  onSubmit={handleRegister}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Name</label>
          <input
            type="text"
            input="name"
            value={name}
            onChange={(e) =>setName(e.target.value)}
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Role</label>
          <select
            value={role}
            onChange={(e) =>setRole(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
         
          </select>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
