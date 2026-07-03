import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Viewcourses = () => {
  const [courses, setCourses] = useState([]);

  const getcourses = async () => {
    try {
      const res = await axios.get("http://localhost:5500/api/courses");
      setCourses(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getcourses();
  }, []);

  const deletecourses = async (id) => {
    const deleteconfirm = window.confirm("are you sure delete this data?...");

    if (deleteconfirm) {
      try {
        const res = await axios.delete(
          `http://localhost:5500/api/courses/${id}`,
        );
        alert(res.data.message);
        getcourses();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <div>
        {courses.map((x) => (
          <div>
            <h3>{x.title}</h3>
            <p>{x.price}</p>
            <Link to={`/view/${x._id}`}>View</Link>
            <button onClick={() => deletecourses(x._id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Viewcourses;
