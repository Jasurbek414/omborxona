import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home'
import Loginpage from '../pages/loginpage/loginpage'
import Project from '../pages/projects/Project'


const Pagess = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/login" element={<Loginpage/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
    </>
  )
}

export default Pagess;