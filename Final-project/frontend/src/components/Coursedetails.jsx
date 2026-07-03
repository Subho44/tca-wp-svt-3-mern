import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";

const Coursedetails = () => {

  const { id } = useParams();
  const [course, setCourse] = useState({});


  const getsinglecourse = async () => {
    try {
      const res = await axios.get(`http://localhost:5500/api/courses/${id}`);
      setCourse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getsinglecourse();
  }, []);

  return (
    <>
      <div>
        <h3>title: {course.title}</h3>
        <p>price: {course.price}</p>
        <button>
          <Link to="/view">Back</Link>
        </button>
      </div>
    </>
  );
};

export default Coursedetails;
