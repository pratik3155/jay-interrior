import React from 'react';
import './Mission.css';
import { NavLink, useLocation } from 'react-router-dom';
import Image9 from "../assets/team.jpeg";
import Impactimg1 from "../assets/impa.jpg";
import Impactimg2 from "../assets/impa4.jpg";
import Impactimg3 from "../assets/impa3.jpg";

export default function Mission() {
  return (
    <div className="mission-container">
      <h2 className="mission-title fs-1 fw-bold">Our Mission & Vision</h2>
      <div className="mission-content">
        <p><strong className='fw-bold fs-5 text-info'>Mission:</strong> To empower marginalized communities and promote social justice by addressing issues such as poverty, inequality, and hygiene awareness in rural areas. We aim to create a society where everyone has access to education, healthcare, hygiene resources, and economic opportunities.</p>
        <p><strong className='fw-bold fs-5 text-info'>Vision:</strong> A world where every individual, regardless of socio-economic background, has access to essential rights like education, healthcare, and opportunities for sustainable growth and development.</p>
        <i className='fw-bold '>Guided by the values of equality, social justice, and sustainability, we are dedicated to transformative change.</i>
      </div>

      <div className="mission-images">
        <img src={Image9} alt="Education" />
        <img src={Impactimg1} alt="Healthcare" />
        <img src={Impactimg2} alt="Hygiene" />
        <img src={Impactimg3} alt="Sustainability" />
      </div>

      <div className="timeline">
        <div className="timeline-card">
          <div className="year">2023</div>
          <div className="event">Foundation established, focusing on sugarcane workers and their children.</div>
        </div>
        <div className="timeline-card">
          <div className="year">2024</div>
          <div className="event">Launched the 'Samarpan Project' to distribute clothing and essentials to marginalized communities.</div>
        </div>
        <div className="timeline-card">
          <div className="year">2025</div>
          <div className="event">Expanded programs to include hygiene awareness and waste management initiatives.</div>
        </div>
        <div className="timeline-card">
          <div className="year">Ongoing</div>
          <div className="event">Partnering with organizations to promote education, healthcare, and sustainability.</div>
        </div>
      </div>

      <NavLink className="btn btn-color donate-btn btn-success ps-5 pe-5 pt-3 pb-3" to="/get-involved">
                       Join Us on Our Journey
                     </NavLink>
    </div>
  );
}
