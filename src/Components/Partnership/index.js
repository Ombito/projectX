import React from 'react';
import './partnership.css';
import partner1 from '../../Assets/aws.jpg';
import partner2 from '../../Assets/cisco.jpg';
import partner3 from '../../Assets/huawei.jpg';
import partner4 from '../../Assets/fortinet.jpg';
import partner5 from '../../Assets/hp.jpg';
import partner6 from '../../Assets/veeam.jpg';
import partner7 from '../../Assets/microsoft.jpg';
import partner8 from '../../Assets/odoo.jpg';

const partners = [
  {
    name: 'Partner A',
    image: partner1,
  },
  {
    name: 'Partner B',
    image: partner2,
  },
  {
    name: 'Partner C',
    image: partner3,
  },
  {
    name: 'Partner D',
    image: partner4,
  },
  {
    name: 'Partner E',
    image: partner5,
  },
  {
    name: 'Partner E',
    image: partner6,
  },
  {
    name: 'Partner E',
    image: partner7,
  },
  {
    name: 'Partner E',
    image: partner8,
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

