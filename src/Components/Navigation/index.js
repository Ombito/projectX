import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import './navbar.css';
import logo from '../../Assets/logo1.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="Company Logo" />
          </a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-menu ${isMobile ? 'mobile-active' : ''}`}>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">
              Services
            </a>
            <div className="dropdown" ref={dropdownRef}>
              <button className="dropbtn" onClick={toggleDropdown}>
                <FaChevronDown />
              </button>
              <div className={`dropdown-content ${isDropdownOpen ? 'show-dropdown' : ''}`}>
                <a href="/partnership">Partnership</a>
                <a href="/blog">Blog</a>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link cta-btn">
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
