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
    const deleteconfirm = window.confirm("Are you sure delete this data?");

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-4 py-12 relative overflow-hidden">
      <div className="absolute w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-orange-500 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">
            View <span className="text-cyan-400">Courses</span>
          </h1>
          <p className="text-gray-300 mt-3">
            Manage, view and delete your courses easily.
          </p>

          <Link
            to="/add"
            className="inline-block mt-6 bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:scale-105 transition-all duration-300"
          >
            + Add New Course
          </Link>
        </div>

        {courses.length === 0 ? (
          <h2 className="text-center text-white text-2xl">No courses found</h2>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((x) => (
              <div
                key={x._id}
                className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-2xl overflow-hidden hover:scale-105 transition-all duration-500 animate-fadeIn"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition"></div>
                <div className="absolute top-0 right-0 w-24 h-1 bg-orange-400 shadow-[0_0_20px_orange] group-hover:w-full transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 text-2xl font-bold mb-5">
                    📘
                  </div>
                  <img
                    src={`http://localhost:5500/uploads/${x.image}`}
                    alt="img"
                    className="w-full h-52 object-cover"
                  
                  
                  />
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {x.title}
                  </h3>

                  <p className="text-cyan-300 text-xl font-bold mb-6">
                    ₹ {x.price}
                  </p>

                  <div className="flex gap-4">
                    <Link
                      to={`/view/${x._id}`}
                      className="flex-1 text-center bg-cyan-500 text-white py-3 rounded-xl font-semibold hover:bg-cyan-400 transition-all duration-300"
                    >
                      View
                    </Link>

                    <button
                      onClick={() => deletecourses(x._id)}
                      className="flex-1 bg-red-500/80 text-white py-3 rounded-xl font-semibold hover:bg-red-600 transition-all duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/60 rounded-3xl transition-all duration-500"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Viewcourses;
