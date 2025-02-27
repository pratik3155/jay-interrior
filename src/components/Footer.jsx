import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        {/* Logo Section */}
        <div className="footer-logo text-center mb-4">
          <h2>Umang Foundation
          </h2>
        </div>

        {/* Footer Links */}
        <div className="footer-links d-flex justify-content-between flex-wrap mb-4">
          <div className="footer-nav">
            <h5>Navigation</h5>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><NavLink className="nav-link" to="/about">About Us</NavLink></li>
              <li><NavLink className="nav-link" to="/what-we-do">What We Do</NavLink></li>
              <li><NavLink className="NavLink" to="/contact">Contact</NavLink></li>
            </ul>
          </div>

          <div className="footer-social">
            <h5>Follow Us</h5>
            <ul>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="http://www.linkedin.com/in/umang-social-foundation">LinkedIn</a></li>
            </ul>
          </div>

          <div className="footer-policy">
            <h5>Policies</h5>
            <ul>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="footer-subscribe text-center mb-4">
          <h5>Subscribe to get the latest updates</h5>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center">
          <p>&copy; {new Date().getFullYear()} Umang Foundation
          | All Rights Reserved</p>
          <p>Contact: umanag.socialfoundation2023@gmail.com | +123-456-7890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
