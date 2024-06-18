import React from 'react';
import './services.css';
import logo1 from '../../Assets/logo1.png';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-hero-section">
        <h1>Our Services</h1>
        <p>Delivering Excellence in Every Solution</p>
      </div>

      <div className="services-list">
        <div className="service-item" style={{ backgroundImage: `url(${logo1})` }}>
          <div className="service-content">
            <h3>Application Services</h3>
            <p>Delivering custom software solutions to meet your business needs.</p>
            <Link to={`/services`} className="arrow-link">
                <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="service-item" style={{ backgroundImage: `url(${logo1})` }}>
          <div className="service-content">
            <h3>Business Consulting</h3>
            <p>Providing strategic advice to drive growth and efficiency.</p>
            <Link to={`/services`} className="arrow-link">
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="service-item" style={{ backgroundImage: `url(${logo1})` }}>
          <div className="service-content">
            <h3>Cloud and IT Infrastructure</h3>
            <p>Offering robust cloud solutions and IT infrastructure management.</p>
            <Link to={`/services`} className="arrow-link">
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="service-item" style={{ backgroundImage: `url(${logo1})` }}>
          <div className="service-content">
            <h3>Cybersecurity</h3>
            <p>Protecting your business with advanced security solutions.</p>
            <Link to={`/services`} className="arrow-link">
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="service-item" style={{ backgroundImage: `url(${logo1})` }}>
          <div className="service-content">
            <h3>Data Center Services</h3>
            <p>Ensuring optimal performance and reliability of your data centers.</p>
            <Link to={`/services`} className="arrow-link">
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="service-item" style={{ backgroundImage: `url(${logo1})` }}>
          <div className="service-content">
            <h3>Network Services</h3>
            <p>Building and maintaining efficient network systems.</p>
            <Link to={`/services`} className="arrow-link">
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="service-item" style={{ backgroundImage: `url(${logo1})` }}>
          <div className="service-content">
            <h3>Tech Solutions</h3>
            <p>Implementing innovative technology solutions for your business.</p>
            <Link to={`/services`} className="arrow-link">
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="service-item" style={{ backgroundImage: `url(${logo1})` }}>
          <div className="service-content">
            <h3>Integration</h3>
            <p>Seamlessly integrating diverse systems for enhanced performance.</p>
            <Link to={`/services`} className="arrow-link">
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;


// import React from 'react';
// import './services.css';
// import logo1 from '../../Assets/logo1.png';


// const services = [
//   {
//     title: 'Application Services',
//     description: 'Delivering custom software solutions to meet your business needs.',
//     image: logo1
//   },
//   {
//     title: 'Business Consulting',
//     description: 'Providing strategic advice to drive growth and efficiency.',
//     image: logo1
//   },
//   {
//     title: 'Cloud and IT Infrastructure',
//     description: 'Offering robust cloud solutions and IT infrastructure management.',
//     image: 'https://via.placeholder.com/300x200'
//   },
//   {
//     title: 'Cybersecurity',
//     description: 'Protecting your business with advanced security solutions.',
//     image: 'https://via.placeholder.com/300x200'
//   },
//   {
//     title: 'Data Center Services',
//     description: 'Ensuring optimal performance and reliability of your data centers.',
//     image: 'https://via.placeholder.com/300x200'
//   },
//   {
//     title: 'Network Services',
//     description: 'Building and maintaining efficient network systems.',
//     image: 'https://via.placeholder.com/300x200'
//   },
//   {
//     title: 'Tech Solutions',
//     description: 'Implementing innovative technology solutions for your business.',
//     image: 'https://via.placeholder.com/300x200'
//   },
//   {
//     title: 'Integration',
//     description: 'Seamlessly integrating diverse systems for enhanced performance.',
//     image: 'https://via.placeholder.com/300x200'
//   }
// ];

// const Services = () => {
//   return (
//     <div className="services">
//       <header className="hero-section">
//         <h1>Our Services</h1>
//         <p>Delivering Excellence in Every Solution</p>
//       </header>
//       <section className="services-list">
//         {services.map((service, index) => (
//           <div key={index} className="service-item" style={{ backgroundImage: `url(${service.image})` }}>
//             <div className="service-content">
//               <h3>{service.title}</h3>
//               <p>{service.description}</p>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Services;
