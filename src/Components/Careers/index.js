import React, { useState } from 'react';
import './careers.css';
import Image from '../../Assets/aws.jpg';

const Careers = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Resume:', resume);
  };

  return (
    <div className="careers-container">
      <div className="careers-header">
        <h1>Join Our Team</h1>
        <p>At Hazel Systems, we're always looking for talented individuals to join our dynamic team. Explore our current openings and apply today!</p>
      </div>
      <div className="job-openings">
        <h2>Current Openings</h2>
        <div className="job-listing">
          <h3>Software Engineer</h3>
          <p>Location: Remote</p>
          <p>We're looking for a skilled software engineer with experience in full-stack development. Knowledge of React, Node.js, and cloud platforms is a plus.</p>
        </div>
        <div className="job-listing">
          <h3>Project Manager</h3>
          <p>Location: Nairobi, Kenya</p>
          <p>We need a project manager with excellent organizational skills and experience managing tech projects. PMP certification is preferred.</p>
        </div>
        <div className="job-listing">
          <h3>System Analyst</h3>
          <p>Location: Nairobi, Kenya</p>
          <p>We're seeking a system analyst who can analyze and optimize our clients' IT systems. Strong analytical skills and experience with integration solutions are required.</p>
        </div>
      </div>
      <div className="apply-section">
        <h2>Apply Now</h2>
        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="resume">Resume:</label>
            <input
              type="file"
              id="resume"
              onChange={(e) => setResume(e.target.files[0])}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default Careers;
