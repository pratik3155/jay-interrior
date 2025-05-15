import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from '../assets/assetid/logofinal.png';

const Header = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';  // Check if the current route is home

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isHomePage ? (navbarScrolled ? 'navbar-scrolled' : 'navbar-transparent') : 'navbar-scrolled'
      }`}
    >
      <div className="container">
        {/* Logo Section */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={Logo}
            alt="Logo"
            className="logo"
          />
        </NavLink>

        {/* Toggler for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Options in the Center */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/what-we-do">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Donate Us Button on the Right */}
        <div className="d-none d-md-flex align-items-center">
          <NavLink className="btn btn-success rounded-pill p-3 donate-btn border-0" to="/contact">
            Free Quote
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
