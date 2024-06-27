import React from 'react';
import './footer.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>Milmax</h2>
                    <p>Milmax is a leading technology company specializing in system integration. We help businesses streamline their operations and improve productivity through seamless integration solutions.</p>
                    <div className="socials">
                        <a href="#" aria-label="Facebook"><FaFacebook /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Case Studies</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <div className="contact-items">
                        <FaPhoneAlt /> 
                        <span>+123 456 7890</span>
                    </div>
                    <div className="contact-items">
                        <FaEnvelope /> 
                        <span>info@hazelsystems.com</span>
                    </div>
                    <div className="contact-items">
                        <FaMapMarkerAlt /> 
                        <span>123 Tech Street, Silicon Valley, CA</span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Milmax. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
