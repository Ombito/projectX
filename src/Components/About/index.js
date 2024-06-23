import React from 'react';
import './about.css';
import Image from '../../Assets/aws.jpg';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About Us</h1>
                <p>Learn more about our mission, values, team, and achievements.</p>
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
                    <h2>Core Competencies</h2>
                    <p>With expertise in [list core competencies], Hazel Systems excels in delivering tailored solutions that optimize business processes and drive efficiency.</p>

                    <h2>Client Testimonials</h2>
                    <h2>Our Team</h2>
                    <p>Meet the dedicated professionals behind Hazel Systems. Our team consists of experts with diverse backgrounds and extensive experience in system integration, ensuring that we deliver superior solutions tailored to our clients' needs.</p>
                    
                    <h2>Our Achievements</h2>
                    <p>Throughout our journey, Hazel Systems has achieved significant milestones and received recognition for our outstanding contributions to system integration. We are proud to have successfully implemented solutions for leading companies across various industries.</p>
                </div>
                <div className="about-image">
                    <img src={Image} alt="About Hazel Systems" />
                </div>
            </div>
        </div>
    );
};

export default About;
