import React, { useState, useEffect } from 'react';
import { Route , Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Careers from './Components/Careers';
import Home from './Components/Home';
import Topbar from './Components/Topbar';
import About from './Components/About';
import Footer from './Components/Footer';
import Partnership from './Components/Partnership';
import Products from './Components/Products';
import NotFound from './Components/NotFound';
import Navbar from './Components/Navigation';
import Blog from './Components/Blog';
import Services from './Components/Services';

function App() {
  const BLOG_API_URL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=12c980041394435e97d1b0c17450f7ab';

  fetch("https://cyber-security-news.p.rapidapi.com/news/%7Blatimes%7D?latimes=%2Flatimes", {
    headers: {
      "X-RapidAPI-Key": "x-rapidapi-host: cyber-security-news.p.rapidapi.com",
      "x-rapidapi-key": "6e61212b02msh9eda001a2a9360fp118e03jsn116b801d7fab"
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))


  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog  blogsData={BLOG_API_URL} />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
