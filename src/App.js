import './App.css';
import React from 'react';
import {Routes, Route } from "react-router-dom";

import Inicio from './pages/inicio';
import Planos from './pages/planos';
import Login from './pages/login';
import SignUp from './pages/signup';

import Navbar from './components/Navbar';


function App() {
  return (  
    <>
    <Navbar />
    <Routes>
        <Route path = '/inicio' element = {<Inicio/>}/>
        <Route path = '/planos' element = {<Planos/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/signup' element = {<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;
