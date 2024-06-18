import React from 'react';
import './partnership.css';
import partner1 from '../../Assets/aws.jpg';
import partner2 from '../../Assets/cisco.jpg';
import partner3 from '../../Assets/huawei.jpg';
import partner4 from '../../Assets/fortinet1.jpg';
import partner5 from '../../Assets/microsoft.jpg';
import partner6 from '../../Assets/veeam.jpg';
import partner7 from '../../Assets/hp.jpg';
import partner8 from '../../Assets/odoo.jpg';
import partner9 from '../../Assets/sophos.jpg';
import partner10 from '../../Assets/lenovo.jpg';
import partner11 from '../../Assets/mcafee.jpg';
import partner12 from '../../Assets/hikvision.jpg';
import partner13 from '../../Assets/redhat.png';
import partner14 from '../../Assets/dell.jpg';

const partners = [
  {
    name: 'AWS',
    image: partner1,
  },
  {
    name: 'Cisco',
    image: partner2,
  },
  {
    name: 'Huawei',
    image: partner3,
  },
  {
    name: 'Fortinet',
    image: partner4,
  },
  {
    name: 'Microsoft',
    image: partner5,
  },
  {
    name: 'Veeam',
    image: partner6,
  },
  {
    name: 'HP',
    image: partner7,
  },
  {
    name: 'Odoo',
    image: partner8,
  },
  {
    name: 'Sophos',
    image: partner9,
  },
  {
    name: 'Lenovo',
    image: partner10,
  },
  {
    name: 'McAfee',
    image: partner11,
  },
  {
    name: 'Hikvision',
    image: partner12,
  },
  {
    name: 'RedHat',
    image: partner13,
  },
  {
    name: 'Dell',
    image: partner14,
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

