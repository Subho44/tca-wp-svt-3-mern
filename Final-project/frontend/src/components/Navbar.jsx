import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
      <>
        <nav className="bg-slate-900 text-white px-8 py-4 shadow-xl">
          <div className='max-w-6xl mx-auto flex justify-between items-center'>
            <Link to="/" className='text-2xl font-bold text-cyan-400'>E-learning</Link>
            <ul className='flex gap-6 font-medium'>
              <li>
                <Link to="/home" className='hover:text-cyan-400'>Home</Link>
              </li>
              <li>
                <Link to="/add" className='hover:text-cyan-400'>Add-course</Link>
              </li>
              <li>
                <Link to="/view" className='hover:text-cyan-400'>View Course</Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
}

export default Navbar