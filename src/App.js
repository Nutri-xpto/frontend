import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Inicio from './pages/inicio';
import Planos from './pages/planos';
import Login from './pages/login';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/inicio' component={Inicio} />
          <Route path='/planos' component={Planos} />
          <Route path='/login' component={Login} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
