import React, { useState, useEffect } from 'react';
import { Route , Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from './Components/About';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
import Portfolio from './Components/Portfolio';
import Navbar from './Components/Navigation';
import Blog from './Components/Blog';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
