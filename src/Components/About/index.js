import React from 'react';
import './about.css';
import Contact from '../Contact';
import Image from '../../Assets/aws.jpg';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className="about-container">
          <div className="about-header">
            <h1>About Us</h1>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>Our mission is to provide innovative and reliable system integration solutions that empower businesses to streamline operations and achieve sustainable growth. We strive to deliver exceptional value through our expertise, dedication, and commitment to excellence.</p>       
              <h2>Our Values</h2>
              <ul>
                <li><strong>Customer Satisfaction:</strong> We prioritize customer needs and satisfaction above all else.</li>
                <li><strong>Innovation:</strong> We continuously innovate to stay ahead in technology and deliver cutting-edge solutions.</li>
                <li><strong>Integrity:</strong> We operate with honesty, transparency, and integrity in all our interactions.</li>
                <li><strong>Teamwork:</strong> We foster collaboration and teamwork to achieve collective success.</li>
                <li><strong>Quality:</strong> We ensure high standards of quality in everything we do.</li>
              </ul>
              <div className="clients-container">
                <h2>Our Clients</h2>
                <div className="clients-logos">
                  <div className="logo-strip">
                    <img src={Image} alt="Company logo" />
                    <img src={Image} alt="Company logo" />
                    <img src={Image} alt="Company logo" />
                    <img src={Image} alt="Company logo" />
                    <img src={Image} alt="Company logo" />
                    <img src={Image} alt="Company logo" />
                    <img src={Image} alt="Company logo" />
                    <img src={Image} alt="Company logo" />
                    <img src={Image} alt="Company logo" />
                  </div>
                  <div className="logo-strip">
                    <img src={Image} alt="Company logo" />
                    <img src={Image} alt="Company logo" />
                    <img src={Image} alt="Company logo" />
                    <img src={Image} alt="Company logo" />
                    <img src={Image} alt="Company logo" />
                    <img src={Image} alt="Company logo" />
                    <img src={Image} alt="Company logo" />
                    <img src={Image} alt="Company logo" />
                    <img src={Image} alt="Company logo" />
                  </div>
                </div>
              </div>
              <div className="about-row">
                <div className="about-column">
                  <h2>Core Competencies</h2>
                  <p>With expertise in Hazel Systems excels in delivering tailored solutions that optimize business processes and drive efficiency.</p>
                  <Link to="/services" className="view-services-btn">VIEW SERVICES</Link>
                </div>
                <div className="about-column">
                  <img src={Image} alt="image" className="core-competencies-image" />
                </div>
              </div>
              <div className="join-team-container">
                <div className="careers-image">
                  <img src={Image} alt="image" className="image" />
                </div>
                <div className="content-container">
                  <h2 className="heading">Join Our Team</h2>
                  <p className="paragraph">
                    Join our dedicated team of professionals behind Hazel Systems. Our team
                    consists of experts with diverse backgrounds and extensive experience in
                    system integration, ensuring that we deliver superior solutions tailored
                    to our clients' needs.
                  </p>
                  <button className="careers-btn" onClick={() => window.location.href = '/careers'}>EXPLORE CAREERS</button>
                </div>
              </div>     
            </div>
          </div>
        </div>
    );
  };

export default About;
