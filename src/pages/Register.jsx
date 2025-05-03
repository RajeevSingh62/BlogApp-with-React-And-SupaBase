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
const [avatarUrl, setAvatarUrl] = React.useState(null); 




const handleRegister = async (e) => {
  e.preventDefault();

  const userData = {
    name,
    email,
    password,
    role,
  };

  const authUser = await dispatch(registerUser(userData));

  if (!authUser?.payload) {
    alert("Registration failed!");
    return;
  }

  const { id } = authUser.payload;

  let avatarUrlInStorage = null;

  // 1️⃣ Upload avatar image to Supabase Storage
  if (avatarUrl) {
    const fileExt = avatarUrl.name.split(".").pop();
    const filePath = `avatars/${id}.${fileExt}`;

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, avatarUrl);

    if (uploadError) {
      console.error("Image upload failed:", uploadError.message);
    } else {
      const { data: publicUrlData } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      avatarUrlInStorage = publicUrlData.publicUrl;
    }
  }

  // 2️⃣ Insert user into custom 'users' table
  const { error } = await supabase.from("users").insert([
    {
      id,
      full_name: name,
      email,
      role,
      avatar_url: avatarUrlInStorage, // now it's a string URL
      created_at: new Date(),
    },
  ]);

  if (error) {
    console.error("Insert error:", error.message);
    alert("Failed to save user data!");
  } else {
    alert("Registration successful!");
    navigate("/");
  }

  // 3️⃣ Reset form
  setName("");
  setEmail("");
  setPassword("");
  setRole("");
  setAvatarUrl(null);
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
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>image</label>
          <input
            type="file"
              accept="image/*"
            // value={avatarUrl}
            onChange={(e) =>setAvatarUrl(e.target.files[0])}
            placeholder="click to upload image"
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

          <button style={{cursor:"pointer", marginLeft:"8px", border:"none", backgroundColor:"none",color:"blue " }} onClick={()=>navigate('/login')}>login</button>

        </p>
    </div>
  );
};

export default RegistrationForm;
