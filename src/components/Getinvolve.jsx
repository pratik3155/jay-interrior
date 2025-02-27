import React from 'react';
import './Getinvolve.css';
import Image13 from "../assets/hero-img.jpg"; // Volunteer Image
import Image14 from "../assets/impa4.jpg"; // Donate Image
import Image15 from "../assets/team.jpeg"; // Partner Image
import { NavLink } from 'react-router-dom';

export default function GetInvolve() {
  return (
    <div className="get-involve-container py-5 mt-5 pt-5">
      {/* Volunteer Section */}
      <section className="get-involve-section volunteer-section mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img src={Image13} alt="Volunteer with Us" className="involve-image" />
          </div>
          <div className="col-md-6 text-md-start text-center">
            <h2 className="section-title">Be the Change: Volunteer with Us</h2>
            <p className="section-description">
              Join hands with Umang Social Foundation to directly impact lives in underserved communities. Whether it’s distributing clothes, teaching children, or organizing hygiene workshops, your time and effort can make a real difference.
            </p>
            <ul className="feature-list">
              <li>Distribute essentials through the Samarpan project.</li>
              <li>Participate in literacy and education programs.</li>
              <li>Assist in hygiene awareness campaigns and workshops.</li>
            </ul>
            <NavLink to="/contact" className="cta-button-n mt-3">Sign Up to Volunteer</NavLink>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="get-involve-section donate-section">
        <div className="row align-items-center flex-md-row-reverse">
          <div className="col-md-6 text-center">
            <img src={Image14} alt="Donate to Our Cause" className="involve-image" />
          </div>
          <div className="col-md-6 text-md-start text-center">
            <h2 className="section-title">Support Us: Donate Today</h2>
            <p className="section-description">
              Your generosity can transform lives. Every donation goes towards funding essential programs, from education initiatives to providing clean water and sanitation in marginalized communities.
            </p>
            <ul className="feature-list">
              <li>One-time donation</li>
              <li>Monthly or recurring contributions</li>
              <li>Sponsorship for specific programs</li>
            </ul>
            <p className="impact-text">
              <strong>Example Impact:</strong> ₹500 can provide school supplies for 5 children.
            </p>
            <NavLink to="/contact" className="cta-button-n mt-3">Make a Donation</NavLink>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="get-involve-section partner-section">
        <div className="row align-items-center">
          <div className="col-md-6 text-center">
            <img src={Image15} alt="Partner with Us" className="involve-image" />
          </div>
          <div className="col-md-6 text-md-start text-center">
            <h2 className="section-title">Collaborate for a Greater Impact</h2>
            <p className="section-description">
              Join forces with Umang Social Foundation to amplify impact. Together, we can create long-term solutions for education, healthcare, and sustainability.
            </p>
            <ul className="feature-list">
              <li>Corporate Social Responsibility (CSR) alignment</li>
              <li>Recognition in our campaigns and events</li>
              <li>Opportunities to co-create programs that align with your organization’s values</li>
            </ul>
            <NavLink to="/contact" className="cta-button-n mt-3">Become a Partner</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
