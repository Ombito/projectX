import React from 'react';
import './home.css';
import Partnership from '../Partnership';
import video from '../../Assets/banner.mp4';
import image from '../../Assets/aws.jpg';


const Home = () => {
    return (
        <div className="home-container">
            <div className="video-background">
                <video autoPlay muted loop id="background-video">
                    <source src={video} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <header className="video-header">
                    <h1>Welcome to Hazel Systems</h1>
                    <p>Your trusted partner in system integration</p>
                </header>
            </div>
            <div className="home-hero-div">
                <section className="intro">
                    <div className="intro-content">
                        <img src={image} alt="Integration Solutions" />
                        <div>
                            <p>At Hazel Systems, we specialize in providing cutting-edge system integration solutions to streamline your operations and enhance productivity. Our team of experts is dedicated to delivering customized services that meet your unique needs.</p>
                            <p>Explore our wide range of services and discover how we can help you achieve seamless integration across your systems.</p>
                        </div>
                    </div>
                </section>
                <section className="why-choose-us">
                    <h2>Why Choose Us</h2>
                    <div className="reasons">
                        <div className="reason">
                            <img src={image} alt="Experience" />
                            <h3>Experienced Team</h3>
                            <p>Our team has years of experience in delivering successful integration projects.</p>
                        </div>
                        <div className="reason">
                            <img src={image} alt="Quality" />
                            <h3>Quality Assurance</h3>
                            <p>We ensure high-quality solutions through rigorous testing and quality control.</p>
                        </div>
                        <div className="reason">
                            <img src={image} alt="Support" />
                            <h3>24/7 Support</h3>
                            <p>Our support team is available around the clock to assist you with any issues.</p>
                        </div>
                    </div>
                </section>
                <section className="our-process">
                    <h2>Our Process</h2>
                    <div className="process-steps">
                        <div className="process-step">
                            <img src={image} alt="Consultation" />
                            <h3>Consultation</h3>
                            <p>We start with understanding your needs and requirements to tailor our solutions.</p>
                        </div>
                        <div className="process-step">
                            <img src={image} alt="Planning" />
                            <h3>Planning</h3>
                            <p>Our team creates a detailed plan to ensure smooth and effective integration.</p>
                        </div>
                        <div className="process-step">
                            <img src={image} alt="Implementation" />
                            <h3>Implementation</h3>
                            <p>We implement the solutions efficiently with minimal disruption to your operations.</p>
                        </div>
                        <div className="process-step">
                            <img src={image} alt="Support" />
                            <h3>Support</h3>
                            <p>We provide ongoing support to ensure everything runs smoothly post-integration.</p>
                        </div>
                    </div>
                </section>
                <section className="testimonials">
                    <h2>Testimonials</h2>
                    <div className="testimonial-cards">
                        <div className="testimonial-card">
                            <p>"Hazel Systems transformed our operations with their exceptional integration services. Highly recommend!"</p>
                            <p><strong>- Alex Johnson, CEO of TechCorp</strong></p>
                        </div>
                        <div className="testimonial-card">
                            <p>"The team at Hazel Systems is professional, knowledgeable, and always ready to help. Great experience!"</p>
                            <p><strong>- Maria Lopez, IT Manager at Innovate Inc.</strong></p>
                        </div>
                    </div>
                </section>
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
                            <p>Hazel Systems has been recognized as a leader in system integration, receiving the prestigious XYZ Award.</p>
                        </div>
                    </div>
                </section>
                <Partnership />
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
            </div>
        </div>
    );
};

export default Home;
