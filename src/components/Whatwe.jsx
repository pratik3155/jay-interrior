import React from 'react';
import './Whatwedo.css';
import Image4 from "../assets/pic1.png"; 
import Samarpan from "../assets/samarpan.jpg";
import Team from "../assets/team.jpeg"; // Main image for initiatives
import { NavLink } from 'react-router-dom';

export default function Whatwe() {
  return (
    <div className="what-we-do mt-5 pt-5">
      <div className="container text-center">
        <h2 className="fw-bold display-4 mb-5 mt-5">Key Initiatives under Umang Social Foundation</h2>
        <p className="text-muted mb-4">
          Discover how our programs transform the lives of underserved communities through empowerment, education, and sustainability.
        </p>

        {/* Initiatives Section */}
        <div className="initiatives">
          {[
            {
              title: "Samarpan Project",
              description:
                "We provide clothing and essentials to sugarcane workers and their families. Every month, we identify needs and distribute items such as sweaters, blankets, and other supplies to underserved communities. Volunteers work closely with these families, raising awareness about education, health, and hygiene.",
              image: Samarpan,
            },
            {
              title: "Education Initiatives",
              description:
                "Through initiatives like National Reading Day, we encourage literacy among children in marginalized communities. We also distribute school supplies and resources to support their learning journeys.",
              image: Image4,
            },
            {
              title: "Hygiene Awareness",
              description:
                "We conduct hygiene workshops, install handwashing stations, and provide clean water to promote health and reduce waterborne diseases in rural areas.",
              image: Team,
            },
          ].map((initiative, index) => (
            <div className="initiative-card row align-items-center mb-5" key={index}>
              <div className={`col-md-6 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="initiative-image rounded shadow-lg"
                />
              </div>
              <div className={`col-md-6 text-md-start text-center ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}>
                <h3 className="fw-bold title-ini">{initiative.title}</h3>
                <p className="text-muted">{initiative.description}</p>
                <NavLink to="/about" className="btn btn-outline-primary mt-3 learn-more">Learn More</NavLink>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="cta text-center mt-5 pt-5">
          <h3 className="fw-bold text-light">Ready to Make an Impact?</h3>
          <p className="text-light mb-4">Join our mission to empower communities and create sustainable change.</p>
          <button className="cta-button btn-light btn-lg">Donate Us</button>
        </div>
      </div>
    </div>
  );
}
