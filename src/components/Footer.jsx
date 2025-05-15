import React from 'react';
import './Footer.css';
import { NavLink, useLocation } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        {/* Logo Section */}
        <div className="footer-logo text-center mb-4">
          <h2>SMART HOME DECOR
          </h2>
        </div>

        {/* Footer Links */}
        <div className="footer-links d-flex justify-content-between flex-wrap mb-4">
          <div className="footer-nav">
            <h5>Navigation</h5>
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

          <div className="footer-social">
            <h5>Follow Us</h5>
            <ul>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://www.instagram.com/umangsf?igsh=YXEycjdtd3lpandv">Instagram</a></li>
              <li><a href="http://www.linkedin.com/in/umang-social-foundation">LinkedIn</a></li>
            </ul>
          </div>

          <div className="footer-policy">
            <h5>Services</h5>
            <ul>
              <li><a href="/">Home Decor</a></li>
              <li><a href="/">Party Interior</a></li>
              <li><a href="/">Office Interior</a></li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        {/* <div className="footer-subscribe text-center mb-4">
          <h5>Subscribe to get the latest updates</h5>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div> */}

        {/* Footer Bottom */}
        <div className="footer-bottom text-center">
          <p>&copy; {new Date().getFullYear()} SMART HOME DECOR
          | All Rights Reserved</p>
          <p>Contact: Jaymene43@gmail.com | +91 9422547140</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
