import React, { useState } from 'react';
import './contact.css';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (captchaValue) {
      console.log('Name:', name);
      console.log('Company:', company);
      console.log('Email:', email);
      console.log('Message:', message);
    } else {
      alert('Please complete the reCAPTCHA');
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className="contact-form-container">
      <h2>Get in Touch</h2>
      <div className="contact-form-hero">
        <form className="get-in-touch" onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="company">Company Name:</label>
            <input
              type="text"
              id="company"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="contact-form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              placeholder="Type your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <ReCAPTCHA
            sitekey="6LcnjAgqAAAAAOgaj4U3pZOFgGfw1r8jr8u92yTa"
            onChange={handleCaptchaChange}
          />
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p>Email: <a href="mailto:milmax-systems@gmail.com">info@milmaxsystems.com</a></p>
          <p>Phone: +254 721 857 213</p>
          <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
        </div>
      </div>
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.509262619126!2d36.798143089743!3d-1.2702988999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1aebe7a4b835%3A0x4f48419e37f2b2b7!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1614695309023!5m2!1sen!2ske"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location">
        </iframe>
      </div>
    </div>
  );
};

export default Contact;