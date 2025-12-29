import React from "react";
import { useState } from "react";
import api from "../api/api.js";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const login = () => {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formdata.email || !formdata.password) {
      alert("Fill the value");
    }
    try {
      const res = await api.post("/auth/login", formdata);
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
      const token=localStorage.getItem("token")
      const user = jwtDecode(token);

      // Navigate based on role
      if (user.role === "teacher") {
        navigate("/dashboard/teacherdashboard");
      } else if (user.role === "student") {
        navigate("/dashboard/studentdashboard");
      }
    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Your Email"
          type="email"
          onChange={handleChange}
          name="email"
        ></input>
        <input
          placeholder="Enter Your Password"
          type="password"
          onChange={handleChange}
          name="password"
        ></input>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default login;
