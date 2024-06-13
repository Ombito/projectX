import React, { useState, useEffect } from 'react';
import { Route , Routes, useLocation, Navigate} from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
import Portfolio from './Components/Portfolio';
import Navbar from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
