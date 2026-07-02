import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addcourse = () => {
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    title: "",
    price: "",
  });

  const hc = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const hs = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5500/api/courses", course);

      alert("Course added successfully");
      navigate("/view");
    } catch (error) {
      console.log(error);
      alert("Course not added");
    }
  };

  return (
    <div>
      <form onSubmit={hs}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={course.title}
          placeholder="Enter title"
          onChange={hc}
          required
        />

        <br />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={course.price}
          placeholder="Enter price"
          onChange={hc}
          required
        />

        <br />

        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default Addcourse;