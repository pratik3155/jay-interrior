import React from 'react';
import './Achi.css';
import Image6 from "../assets/assetid/ssss.jpg";
import Image7 from "../assets/assetid/sssss1.jpg";
import Image8 from "../assets/assetid/ab-c.png";
import { NavLink } from 'react-router-dom';

export default function Achi() {
  return (
    <div className="achi-container">
      {/* Title Section */}
      <div className="section-header">
        <h2>Our Work</h2>
        
      </div>

      {/* Achievements */}
      <div className="achievements">
        <div className="achievement">
          <img src={Image7} alt="Achievement 1" />
          {/* <p>Clothes Distributed to 390 Individuals Across 12 Communities.</p> */}
        </div>
        <div className="achievement">
          <img src={Image8} alt="Achievement 2" />
          {/* <p>50 Hygiene Awareness Programs Reached 10,000 Individuals.</p> */}
        </div>
        <div className="achievement">
          <img src={Image6} alt="Achievement 3" />
          {/* <p>30% Reduction in Waterborne Diseases in Targeted Communities.</p> */}
        </div>
      </div>

      {/* Story Highlight */}
      {/* <div className="story-highlight">
        <p>"National Reading Day was celebrated with children at Raut Brick Kiln, where they engaged in reading activities, fostering a love for books and learning."</p>
        <p><strong>"The program doesn’t just provide material aid but also a sense of hope and dignity for our community."</strong></p>
      </div> */}

      {/* Call to Action */}
      {/* <div className="cta-section">
        <NavLink to="/get-involved" className="cta-button">See More of Our Impact</NavLink>
      </div> */}

      {/* Future Goals */}
      {/* <div className="section-header">
        <h2>Looking Ahead: Our Goals</h2>
        <p>Highlight key objectives and future plans:</p>
      </div> */}

      {/* Goals */}
      {/* <div className="goals">
        <div className="goal">
          <p><strong>Improve Hygiene and Sanitation:</strong></p>
          <p>Expand sanitation infrastructure by increasing handwashing stations, community toilets, and water purification systems.</p>
        </div>
        <div className="goal">
          <p><strong>Hygiene Education:</strong></p>
          <p>Reach 20,000 individuals through workshops on sanitation, handwashing, and waste management.</p>
        </div>
        <div className="goal">
          <p><strong>Sustainable Waste Management:</strong></p>
          <p>Implement community-driven initiatives to educate about recycling and composting.</p>
        </div>
        <div className="goal">
          <p><strong>Empower Through Partnerships:</strong></p>
          <p>Forge new collaborations with NGOs and private organizations to expand educational and healthcare programs.</p>
        </div>
      </div> */}

      {/* Call to Action */}
      {/* <div className="cta-section">
        <NavLink to="/contact" className="cta-button-n">Support Our Vision</NavLink>
      </div> */}
    </div>
  );
}

