import api from "../api/api.js";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const createexam = () => {
  const [data, formData] = useState({
    title: "",
    duration: "",
    totalmarks: "",
    isActive: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    formData({
      ...data,
      [name]:
        name === "isActive"
          ? value === "True"
          : name === "duration" || name === "totalmarks"
          ? Number(value)
          : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.title || !data.duration || !data.totalmarks || !data.isActive) {
      alert("Fill all the field first");
      return;
    }
    try {
      const res = await api.post("exam/examcreate", data);
      console.log(res.data);
      navigate("/exam/questiosent",{
        state:{examid:res.data.exam._id,duration:res.data.exam.duration,totalmarks:res.data.exam.totalmarks}
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Your Title"
          name="title"
          onChange={handleChange}
        />
        <input
          placeholder="Enter Your Time duration"
          name="duration"
          onChange={handleChange}
        />
        <input
          placeholder="Enter Totalmarks"
          name="totalmarks"
          onChange={handleChange}
        />
        <h3>Is Exam is Active or Not</h3>
        <select name="isActive" value={data.isActive} onChange={handleChange}>
          <option value="">Select</option>
          <option value="True">True</option>
          <option value="False">False</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default createexam;
