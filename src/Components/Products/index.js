import React from 'react';
import './products.css';
import serverImage from '../../Assets/logo1.png';
import businessAppImage from '../../Assets/logo1.png';
import firewallImage from '../../Assets/logo1.png';
import licenseImage from '../../Assets/logo1.png';
import cctvImage from '../../Assets/logo1.png';
import routerImage from '../../Assets/logo1.png';
import printerImage from '../../Assets/logo1.png';
import laptopImage from '../../Assets/logo1.png';
import desktopImage from '../../Assets/logo1.png';
import monitorImage from '../../Assets/logo1.png';
import storageImage from '../../Assets/logo1.png';
import switchImage from '../../Assets/logo1.png';
import softwareImage from '../../Assets/logo1.png';
import headsetImage from '../../Assets/logo1.png';
import cameraImage from '../../Assets/logo1.png';

const products = [
  {
    title: 'Server',
    description: 'Powerful server solutions for enterprise-level applications.',
    image: serverImage,
  },
  {
    title: 'Business Applications',
    description: 'Suite of software applications tailored for business productivity.',
    image: businessAppImage,
  },
  {
    title: 'Firewall',
    description: 'Advanced firewall systems to protect your network from cyber threats.',
    image: firewallImage,
  },
  {
    title: 'Software Licenses',
    description: 'Licenses for various software products to ensure legal compliance.',
    image: licenseImage,
  },
  {
    title: 'CCTV Systems',
    description: 'Surveillance systems for monitoring and security purposes.',
    image: cctvImage,
  },
  {
    title: 'Router',
    description: 'High-performance routers for efficient data routing across networks.',
    image: routerImage,
  },
  {
    title: 'Printer',
    description: 'Printers for everyday office and document printing needs.',
    image: printerImage,
  },
  {
    title: 'Laptop',
    description: 'Portable laptops for remote work and on-the-go computing.',
    image: laptopImage,
  },
  {
    title: 'Desktop Computer',
    description: 'Powerful desktop computers for intensive computing tasks.',
    image: desktopImage,
  },
  {
    title: 'Monitor',
    description: 'High-resolution monitors for clear and detailed display.',
    image: monitorImage,
  },
  {
    title: 'Storage Solutions',
    description: 'Various storage options including SSDs and HDDs for data management.',
    image: storageImage,
  },
  {
    title: 'Network Switch',
    description: 'Switches to connect multiple devices within a network.',
    image: switchImage,
  },
  {
    title: 'Productivity Software',
    description: 'Software solutions for enhancing productivity and collaboration.',
    image: softwareImage,
  },
  {
    title: 'Headset',
    description: 'Headsets for clear communication and audio experiences.',
    image: headsetImage,
  },
  {
    title: 'Security Camera',
    description: 'Cameras for monitoring premises and ensuring security.',
    image: cameraImage,
  },
];

const Products = () => {
  return (
    <div className="products">
      <header className="hero-section">
        <h1>Our Products</h1>
        <p>Explore Our Range of IT Equipment and Solutions</p>
      </header>
      <section className="products-list">
        {products.map((product, index) => (
          <div key={index} className="product-item" style={{ backgroundImage: `url(${product.image})` }}>
            <div className="product-content">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <button>Learn More</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
