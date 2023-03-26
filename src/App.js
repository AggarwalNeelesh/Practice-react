// import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './style.css';
import About from './Components/About';
import Filter from './Components/Filter';
import Home from './Components/Home';
import Users from './Components/Users';
import Navbars from './Components/Navbars';
import PageNotFound from './Components/PageNoteFound';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbars/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/user' element={<Users/>}/>
        <Route path='/user/:name' element={<Users/>}/>
        <Route path='/filter' element={<Filter/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
