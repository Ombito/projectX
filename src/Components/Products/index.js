// src/Products.js
import React from 'react';
import { Link } from 'react-router-dom';
import './products.css'; // Import your CSS file for styling

const products = [
  {
    title: 'Product A',
    description: 'Description of Product A.',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL or import from assets
    link: 'product-a'
  },
  {
    title: 'Product B',
    description: 'Description of Product B.',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL or import from assets
    link: 'product-b'
  },
  {
    title: 'Product C',
    description: 'Description of Product C.',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL or import from assets
    link: 'product-c'
  },
  // Add more products as needed
];

const Products = () => {
  return (
    <div className="products">
      <header className="hero-section">
        <h1>Our Products</h1>
        <p>Explore Our Innovative Solutions</p>
      </header>
      <section className="products-list">
        {products.map((product, index) => (
          <div key={index} className="product-item" style={{ backgroundImage: `url(${product.image})` }}>
            <div className="product-content">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
            <Link to={`/products/${product.link}`} className="arrow-link">
              <span>&rarr;</span>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
