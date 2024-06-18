import React from 'react';
import './services.css';
import { Link } from 'react-router-dom';
import logo1 from '../../Assets/logo1.png';
import bussinessApplications from '../../Assets/bussiness-applications.jpg';
import cloud from '../../Assets/cloud.jpg';
import security from '../../Assets/security.jpg';
import datacenter from '../../Assets/datacenter.jpg';
import machineLearning from '../../Assets/machine-learning.jpg';
import businessConsulting from '../../Assets/business-consulting.jpg';
import networkServices from '../../Assets/network-services.jpg';
import managedServices from '../../Assets/managed-services.jpg';


const Services = () => {
  return (
    <div className="services-page">
      <div className="services-hero-section">
        <h1>Our Services</h1>
        <p>Delivering Excellence in Every Solution</p>
      </div>
      <div className="intro-section">
        <h2>What we do</h2>
        <p>We are dedicated to providing outstanding services that cater to the unique needs of your business. Our team of experts works tirelessly to ensure that we deliver solutions that drive growth, enhance efficiency, and secure your operations.</p>
      </div>
      <div className="services-list">
        <div className="service-item" style={{ backgroundImage: `url(${bussinessApplications})` }}>
          <div className="service-content">
            <h3>Business Applications</h3>
            <p>Delivering custom software solutions to meet your business needs.</p>
            <Link to={`/services`} className="arrow-link">
                <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="service-item" style={{ backgroundImage: `url(${cloud})` }}>
          <div className="service-content">
            <h3>Cloud and IT Infrastructure</h3>
            <p>Offering robust cloud solutions and IT infrastructure management.</p>
            <Link to={`/services`} className="arrow-link">
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="service-item" style={{ backgroundImage: `url(${machineLearning})` }}>
          <div className="service-content">
            <h3>AI & Machine Learning</h3>
            <p>Seamlessly integrating diverse systems for enhanced performance.</p>
            <Link to={`/services`} className="arrow-link">
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="service-item" style={{ backgroundImage: `url(${security})` }}>
          <div className="service-content">
            <h3>System Security</h3>
            <p>Protecting your business with advanced security solutions.</p>
            <Link to={`/services`} className="arrow-link">
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="service-item" style={{ backgroundImage: `url(${datacenter})` }}>
          <div className="service-content">
            <h3>Data Center Services</h3>
            <p>Ensuring optimal performance and reliability of your data centers.</p>
            <Link to={`/services`} className="arrow-link">
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="service-item" style={{ backgroundImage: `url(${networkServices})` }}>
          <div className="service-content">
            <h3>Network Services</h3>
            <p>Building and maintaining efficient network systems.</p>
            <Link to={`/services`} className="arrow-link">
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="service-item" style={{ backgroundImage: `url(${businessConsulting})` }}>
          <div className="service-content">
            <h3>Business Consulting</h3>
            <p>Providing strategic advice to drive growth and efficiency.</p>
            <Link to={`/services`} className="arrow-link">
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
        <div className="service-item" style={{ backgroundImage: `url(${managedServices})` }}>
          <div className="service-content">
            <h3>Managed Services</h3>
            <p>Implementing innovative technology solutions for your business.</p>
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
          <p>You can reach us through the contact form, or email us at contact@Milmaxsystems.com</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

