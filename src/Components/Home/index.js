import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Partnership from '../Partnership';
import video from '../../Assets/banner.mp4';
import image from '../../Assets/aws.jpg';
import homeServices from '../../Assets/engineer.jpeg';
import homeTeam from '../../Assets/hometeam.jpeg';
import quality from '../../Assets/automation.png';
import support from '../../Assets/support.jpeg';
import consultation from '../../Assets/consultation2.png';
import planning from '../../Assets/planning2.jpeg';
import implementation from '../../Assets/implementation.jpeg';
import supportHome from '../../Assets/support3.png';
  
const Home = () => {
    return (
        <div className="home-container">
            <div className="video-background">
                <video autoPlay muted loop id="background-video">
                    <source src={video} type="video/mp4" />
                </video>
                <header className="video-header">
                    <h1>Elevate your business with Milmax</h1>
                    <p>Milmax is a cutting-edge technology company specializing in system integration. Our mission is to streamline operations and enhance customer experiences by connecting disparate systems and ensuring seamless data flow.</p>
                    <Link to="/contact"><button className="header__button">Contact Us</button></Link>
                </header>
                <div className="info-section">
                    <div>
                        <h3>Extensive Experience</h3>
                        <p>Proven track record of successfully integrating technology systems for clients.</p>
                    </div>
                    <div>
                        <h3>Reliability</h3>
                        <p>We are committed to delivering projects on time and within budget without compromising on quality.</p>
                    </div>
                    <div>
                        <h3>Innovation Driven</h3>
                        <p>We stay ahead of the curve incorporating the latest technologies and trends into our solutions.</p>
                    </div>
                </div>
            </div>
            <div className="home-hero-div">
                <section className="intro">
                    <div className="intro-content">
                        <img src={homeServices} alt="Integration Solutions" />
                        <p>We specialize in providing cutting edge system integration solutions to streamline business operations and enhance productivity. Founded with a vision to revolutionize the technology landscape, we specialize in comprehensive system integration and an array of technical services tailored to meet the dynamic needs of our clients. Our goal is to empower businesses by seamlessly integrating innovative technology with strategic insights to drive growth and efficiency. Explore our wide range of services and discover how we can help you achieve seamless integration across your systems.</p>
                    </div>
                </section>
                <section className="why-choose-us">
                    <h2>Why Choose Us</h2>
                    <div className="reasons">
                        <div className="reason">
                            <img src={quality} alt="Quality" />
                            <h3>Automation Tools</h3>
                            <p>We offer task automation tools to streamline processes and increase productivity by reducing manual intervention.</p>
                        </div>
                        <div className="reason">
                            <img src={homeTeam} alt="Experience" />
                            <h3>Experienced Team</h3>
                            <p>Our team has years of experience in delivering successful integration projects.</p>
                        </div>
                        <div className="reason">
                            <img src={support} alt="Support" />
                            <h3>Customer Support</h3>
                            <p>Our dedicated support team is available around the clock to assist you with any issues.</p>
                        </div>
                    </div>
                </section>
                <section className="our-process">
                    <h2>Our Process</h2>
                    <div className="process-steps">
                        <div className="process-step">
                            <img src={consultation} alt="Consultation" />
                            <h3>Consultation</h3>
                            <p>We start with understanding your needs and requirements to tailor our solutions.</p>
                        </div>
                        <div className="process-step">
                            <img src={planning} alt="Planning" />
                            <h3>Planning</h3>
                            <p>Our team creates a detailed plan to ensure smooth and effective integration.</p>
                        </div>
                        <div className="process-step">
                            <img src={implementation} alt="Implementation" />
                            <h3>Implementation</h3>
                            <p>We implement the solutions efficiently with minimal disruption to your operations.</p>
                        </div>
                        <div className="process-step">
                            <img src={supportHome} alt="Support" />
                            <h3>24/7 Support</h3>
                            <p>We provide ongoing support to ensure everything runs smoothly post-integration.</p>
                        </div>
                    </div>
                </section>
                <section className="testimonials">
                    <h2>Testimonials</h2>
                    <div className="testimonial-cards">
                        <div className="testimonial-card">
                            <p>"Milmax transformed our operations with their exceptional integration services. Highly recommend!"</p>
                            <p><strong>- David Mwendwa CEO of Computer Revolution</strong></p>
                        </div>
                        <div className="testimonial-card">
                            <p>"The team at Milmax is professional, knowledgeable, and always ready to help."</p>
                            <p><strong>- Susan Karanja, IT Manager at Innovate Inc.</strong></p>
                        </div>
                    </div>
                </section>
                <Partnership />
                <section className="latest-news">
                    <h2>Latest News</h2>
                    <div className="news-cards">
                        <div className="news-card">
                            <img src={image} alt="News 1" />
                            <h3>New Office Opening</h3>
                            <p>We are excited to announce the opening of our new office in New York. Join us for the grand opening event!</p>
                        </div>
                        <div className="news-card">
                            <img src={image} alt="News 2" />
                            <h3>Industry Award</h3>
                            <p>Milmax has been recognized as a leader in system integration, receiving the prestigious XYZ Award.</p>
                        </div>
                    </div>
                </section>
                <section className="case-studies">
                    <h2>Case Studies</h2>
                    <div className="case-studies-cards">
                        <div className="case-study-card">
                            <img src={image} alt="Case Study 1" />
                            <h3>Case Study 1</h3>
                            <p>Learn how we helped Company A achieve seamless integration and improved efficiency.</p>
                        </div>
                        <div className="case-study-card">
                            <img src={image} alt="Case Study 2" />
                            <h3>Case Study 2</h3>
                            <p>Discover the solutions we provided for Company B to overcome their integration challenges.</p>
                        </div>
                    </div>
                </section>
                <div className="home-contact">
                    <p className="home-contact-text">Ready to take your business to the next level? Get in touch with us.</p>
                    <button className="home-contact-button">CONTACT US</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
