import React, { useState }  from 'react';
import './about.css'
import { Link } from 'react-router-dom';
import usiu from '../../Assets/usiu.jpeg';
import ncba from '../../Assets/ncba.jpeg';
import mombasahospital from '../../Assets/mombasahospital.jpeg';
import mombasacounty from '../../Assets/mombasacounty.jpeg';
import ktda from '../../Assets/ktda.png';
import kenyarailways from '../../Assets/kenyarailways.png';
import kabrassugar from '../../Assets/kabrassugar.png';
import familybank from '../../Assets/familybank.jpeg';
import embucounty from '../../Assets/embucounty.jpeg';
import services from '../../Assets/cloud.jpg';
import team from '../../Assets/team.jpeg';

const About = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };


    return (
        <div className="about-container">
          <div className="about-header">
            <h1>About Us</h1>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>Our mission is to provide innovative and reliable system integration solutions that empower businesses to streamline operations and achieve sustainable growth. We strive to deliver exceptional value through our expertise, dedication, and commitment to excellence.</p>       
              <h3>Our Values</h3>
              <ul>
                <li><strong>Customer Satisfaction:</strong> We prioritize customer needs and satisfaction above all else.</li>
                <li><strong>Innovation:</strong> We continuously innovate to stay ahead in technology and deliver cutting-edge solutions.</li>
                <li><strong>Integrity:</strong> We operate with honesty, transparency, and integrity in all our interactions.</li>
                <li><strong>Teamwork:</strong> We foster collaboration and teamwork to achieve collective success.</li>
                <li><strong>Quality:</strong> We ensure high standards of quality in everything we do.</li>
              </ul>
              <div className="clients-container">
                <h3>Our Clients</h3>
                <div className="clients-logos">
                  <div className="logo-strip">
                    <img src={usiu} alt="Company logo" />
                    <img src={ktda} alt="Company logo" />
                    <img src={mombasacounty} alt="Company logo" />
                    <img src={ncba} alt="Company logo" />
                    <img src={kabrassugar} alt="Company logo" />
                    <img src={kenyarailways} alt="Company logo" />
                    <img src={mombasahospital} alt="Company logo" />
                    <img src={embucounty} alt="Company logo" />
                    <img src={familybank} alt="Company logo" />
                  </div>
                  <div className="logo-strip">
                    <img src={usiu} alt="Company logo" />
                    <img src={ktda} alt="Company logo" />
                    <img src={mombasacounty} alt="Company logo" />
                    <img src={ncba} alt="Company logo" />
                    <img src={kabrassugar} alt="Company logo" />
                    <img src={kenyarailways} alt="Company logo" />
                    <img src={mombasahospital} alt="Company logo" />
                    <img src={embucounty} alt="Company logo" />
                    <img src={familybank} alt="Company logo" />
                  </div>
                </div>
              </div>
              <div className="about-row">
                <div className="about-column">
                  <h3>Core Competencies</h3>
                  <p>With great expertise, Milmax excels in delivering tailored solutions that optimize business processes and drive efficiency.</p>
                  <Link to="/services" className="view-services-btn">VIEW SERVICES</Link>
                </div>
                <div className="about-column">
                  <img src={services} alt="image" className="core-competencies-image" />
                </div>
              </div>
              <div className="join-team-container">
                <div className="careers-image">
                  <img src={team} alt="image" className="join-image" />
                </div>
                <div className="join-hero">
                  <h3>Join Our Team</h3>
                  <p className="paragraph">
                    Join our dedicated team of professionals behind Milmax. Our team
                    consists of experts with diverse backgrounds and extensive experience in
                    system integration, ensuring that we deliver superior solutions tailored
                    to our clients' needs.
                  </p>
                  <button className="careers-btn" onClick={() => window.location.href = '/careers'}>EXPLORE CAREERS</button>
                </div>
              </div>
              <div className="get-in-touch-hero">
                <h3>Get in Touch</h3>  
                <div className="contact-form-hero">
                  <form className="get-in-touch" onSubmit={handleSubmit}>
                    <div className="contact-form-group">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="contact-form-group">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="contact-form-group">
                      <label htmlFor="message">Message:</label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                      Send Message
                    </button>
                  </form>
                  <div className="contact-details">
                    <h2>Contact Details</h2>
                    <p>Email: <a href="mailto:milmax-systems@gmail.com">info@milmaxsystems.com</a></p>
                    <p>Phone: +254 (721) 857-213</p>
                    <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
                  </div>
                </div> 
              </div>  
            </div>
          </div>
        </div>
    );
  };

export default About;
