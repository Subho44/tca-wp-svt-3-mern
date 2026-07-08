import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [course, setCourse] = useState({
  
    email: "",
    password: "",
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
      const res = await axios.post("http://localhost:5500/api/auth/login", course);
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("login fail");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 flex items-center justify-center px-4 py-10 relative overflow-hidden">
      <div className="absolute w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-pulse"></div>

      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 animate-fadeIn">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold mb-4">
            Course Management
          </span>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Login Form
          </h1>
        </div>

        <form onSubmit={hs} className="space-y-5">
          

          <div>
            <label className="block text-gray-200 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={hc}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-slate-800 outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-gray-200 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={hc}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/90 text-slate-800 outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
            />
          </div>

          <button
           
            className="w-full bg-cyan-500 text-white py-3 rounded-xl font-bold hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
