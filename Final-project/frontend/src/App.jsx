import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Addcourse from './components/Addcourse';
import Viewcourses from './components/Viewcourses';
import Coursedetails from './components/Coursedetails';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/add" element={<Addcourse />}></Route>
          <Route path="/view" element={<Viewcourses />}></Route>
          <Route path="/view/:id" element={<Coursedetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App