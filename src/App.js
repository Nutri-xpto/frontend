import './App.css';
import React from 'react';
import {Routes, Route } from "react-router-dom";

import Inicio from './pages/inicio';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Footer from './components/footer/Footer'


import Navbar from './components/navbar/Navbar';


function App() {
  return (  
    <>
    <div>
    <Navbar />
    <Routes>
        <Route path = '/' element = {<Inicio/>}/>
        <Route path = '/inicio' element = {<Inicio/>}/>
        <Route path = '/signup' element = {<SignUp/>}/>
        <Route path = '/signin' element = {<SignIn/>}/>
        
    </Routes>
    <Footer />
    </div>
    </>
  );
}

export default App;
