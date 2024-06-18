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
      <div className="intro-section">
        <h2>Welcome to Hazel Systems</h2>
        <p>At Hazel Systems, we are dedicated to providing top-notch services that cater to the unique needs of your business. Our team of experts works tirelessly to ensure that we deliver solutions that drive growth, enhance efficiency, and secure your operations.</p>
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
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h3>What services do you offer?</h3>
          <p>We offer a range of services including application services, business consulting, cloud and IT infrastructure, cybersecurity, data center services, network services, tech solutions, and system integration.</p>
        </div>
        <div className="faq">
          <h3>Are your services customizable?</h3>
          <p>Yes, we tailor our solutions to meet the specific needs and requirements of each client. Whether you need a complete overhaul or targeted improvements, we can help.</p>
        </div>
        <div className="faq">
          <h3>What industries do you specialize in?</h3>
          <p>We specialize in serving a wide range of industries including technology, finance, healthcare, and retail among others. Our expertise allows us to adapt our solutions to various business environments.</p>
        </div>
        <div className="faq">
          <h3>Do you offer ongoing support?</h3>
          <p>Absolutely, we provide comprehensive support and maintenance services to ensure that your systems continue to operate at peak performance.</p>
        </div>
        <div className="faq">
          <h3>How can I get in touch?</h3>
          <p>You can reach us through the contact form, or email us at contact@hazelsystems.com</p>
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
