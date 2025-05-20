import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginUser } from "../redux/features/auth/AuthThunks";
import { toast } from "react-toastify";


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    console.log("User Data", userData);

    const res = await dispatch(loginUser(userData));

    if (res.meta.requestStatus === "fulfilled") {
   toast.success("user logged in successfully")
    setTimeout(()=>{
        navigate("/");
    },1500)
    }
    else{
      toast.error("user not found")
    }
  };

  return (
<>
    <div
      style={{
        width: "300px",
        margin: "100px auto",
        padding: "30px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Login</h2>

      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleLogin}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Email"
          style={{
            marginBottom: "15px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
          style={{
            marginBottom: "15px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>

      <p style={{ marginTop: "15px", fontSize: "14px" }}>
        Don't have an account?{" "}
        <a
          onClick={() => navigate("/register")}
          style={{
            color: "#4CAF50",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Sign up
        </a>
      </p>
    </div>
   
</>
  );
}

export default Login;
