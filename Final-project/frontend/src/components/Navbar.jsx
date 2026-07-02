import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
      <>
        <nav>
          <Link to="/">E-learning</Link>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/add">Add-course</Link>
            </li>
            <li>
              <Link to="/view">View Course</Link>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Navbar