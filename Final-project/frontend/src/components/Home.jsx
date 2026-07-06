import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 flex items-center justify-center px-4 overflow-hidden relative">
      <div className="absolute w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-10 right-10 animate-pulse"></div>

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl text-center max-w-2xl animate-fadeIn">
        <span className="inline-block mb-4 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-semibold">
          Online Learning Platform
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
          Welcome to <span className="text-cyan-400">E-learning</span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg mb-8">
          Add, view and manage your courses easily with a clean and modern
          dashboard.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/add"
            className="bg-cyan-500 text-white px-7 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Add New Course
          </Link>

          <Link
            to="/view"
            className="border border-cyan-400 text-cyan-300 px-7 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 hover:scale-105 transition-all duration-300"
          >
            View Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
