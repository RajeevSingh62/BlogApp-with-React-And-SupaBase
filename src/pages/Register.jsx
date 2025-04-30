import React from "react";
import { registerUser } from "../redux/features/auth/AuthThunks";
import { useDispatch } from "react-redux";
import supabase from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
    const navigate =useNavigate();
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
    navigate('/')
  
 
    if (authUser?.payload) {
      const { id } = authUser.payload; // user id from auth
  
      // 2. Insert into your 'users' table (no password!)
      const { error } = await supabase.from('users').insert([
        {
          id: id,                // uuid from auth
          full_name: name,
          email: email,
          role: role,
          created_at: new Date(),  // optional
        }
      ]);
  
      if (error) {
        console.error('Error inserting into users table:', error.message);
        alert('Failed to insert into users table!');
      } else {
        console.log('User inserted into users table successfully!');
        alert('Registration successful!');
        navigate('/');
      }
    } else {
      console.error('Registration failed:', authUser?.error?.message);
      alert('Registration failed!');
    }
  
    // 3. Clear form fields
    setName('');
    setEmail('');
    setPassword('');
    setRole('');
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
      <br />
        <p>If alreday have a account 
          <button style={{cursor:"pointer"}} onClick={()=>navigate('/login')}>login</button>
        </p>
    </div>
  );
};

export default RegistrationForm;
