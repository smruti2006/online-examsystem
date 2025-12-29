import React, { useState } from "react";
import api from "../api/api.js";
const register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role:"",
  });
  const handleChange=(e)=>{
    const {name,value}=e.target
    setData({
      ...data,
      [name]:value
    })
  }
  const handleSubmit =async (e)=>{
    e.preventDefault()
    if(!data.name || !data.email || !data.password|| !data.role){
      alert("Fill the field first")
      return
    }
    try {
      const user= await api.post('/auth/signup',data)
    } catch (error) {
      console.log("Server Error")
    }
    console.log(data)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter Your name" type="name" name="name" onChange={handleChange}></input>
        <input placeholder="Enter Your Email" type="email" name="email" onChange={handleChange}></input>
        <input
          placeholder="Enter Your Password"
          type="password"
          name="password" onChange={handleChange}
        ></input>
        <h5>Enter Your Role</h5>
        <select type='role' name="role" onChange={handleChange} value={data.role}>
          <option value="">Select Role</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default register;
