// import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './style.css';
import About from './Components/About';
import Filter from './Components/Filter';
import Home from './Components/Home';
import Luffy from './Components/Luffy';
import Naruto from './Components/Naruto';
import Users from './Components/Users';
import Navbars from './Components/Navbars';
import PageNotFound from './Components/PageNoteFound';
import Anime from './Components/Anime';
import Login from './Components/Login';
import Protected from './Components/Protected';
import LuffyCrew from './Components/LuffyCrew';
import Jokes from './Components/Jokes';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbars/>
      <Routes>
        <Route path='/' element={<Protected Component={Home}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/anime/' element={<Anime/>}>
          <Route path='strawHats' element={<Luffy/>}/>
          <Route path='strawHats/:name/:desig' element={<LuffyCrew/>}/>
          <Route path='naruto' element={<Naruto/>}/>
        </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/user' element={<Users/>}/>
        <Route path='/user/:name' element={<Users/>}/>
        <Route path='/filter' element={<Filter/>}/>
        <Route path='/jokes' element={<Jokes/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
