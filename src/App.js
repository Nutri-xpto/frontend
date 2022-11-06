import './App.css';
import {Routes, Route } from "react-router-dom";

import Inicio from './pages/inicio';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

import NutriNavbar from './components/navbar/NutriNavbar';
import NutriHome from './components/nutrihome/nutrihome';


function App() {

  return (  
    <>
    <div>
    <NutriNavbar />
    <Navbar />
    <Routes>
        <Route path = '/' element = {<Inicio/>}/>
        <Route path = '/inicio' element = {<Inicio/>}/>
        <Route path = '/signup' element = {<SignUp/>}/>
        <Route path = '/signin' element = {<SignIn/>}/>
        <Route path = '/plans' element = {<NutriHome/>}/>
        
    </Routes>
    <Footer />
    </div>
    </>
  );
}

export default App;
