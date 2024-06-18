import React from 'react';
import './partnership.css';
import partner1Image from '../../Assets/logo1.png';
import partner2Image from '../../Assets/logo1.png';
import partner3Image from '../../Assets/logo1.png';
import partner4Image from '../../Assets/logo1.png';
import partner5Image from '../../Assets/logo1.png';

const partners = [
  {
    name: 'Partner A',
    image: partner1Image,
  },
  {
    name: 'Partner B',
    image: partner2Image,
  },
  {
    name: 'Partner C',
    image: partner3Image,
  },
  {
    name: 'Partner D',
    image: partner4Image,
  },
  {
    name: 'Partner E',
    image: partner5Image,
  },
  {
    name: 'Partner E',
    image: partner5Image,
  },
  {
    name: 'Partner E',
    image: partner5Image,
  },
  {
    name: 'Partner E',
    image: partner5Image,
  },
  {
    name: 'Partner E',
    image: partner5Image,
  },
  {
    name: 'Partner E',
    image: partner5Image,
  },
  {
    name: 'Partner E',
    image: partner5Image,
  },
];

const Partnership = () => {
  return (
    <div className="partners">
      <header className="hero-section">
        <h1>Our Partners</h1>
        <p>We collaborate with industry leaders to deliver exceptional solutions.</p>
      </header>
      <section className="partners-list">
        {partners.map((partner, index) => (
          <div key={index} className="partner-item">
            <img src={partner.image} alt={partner.name} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Partnership;

