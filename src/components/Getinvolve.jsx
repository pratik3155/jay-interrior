import React from 'react';
import './Getinvolve.css';
import Image13 from "../assets/hero-img.jpg"; // Volunteer Image
import Image14 from "../assets/impa4.jpg"; // Donate Image
import Image15 from "../assets/team.jpeg"; // Partner Image
import { NavLink } from 'react-router-dom';
import deco1 from "../assets/assetid/deco-1.jpg";
import deco2 from "../assets/assetid/deco-2.jpg";
import deco3 from "../assets/assetid/deco-3.jpg";
import deco4 from "../assets/assetid/deco-4.jpg";
import deco5 from "../assets/assetid/deco-5.jpg";
import deco6 from "../assets/assetid/deco-6.jpg";
import deco7 from "../assets/assetid/deco-7.jpg";
import deco8 from "../assets/assetid/deco-8.jpg";
import deco9 from "../assets/assetid/deco-9.jpg";
import deco10 from "../assets/assetid/deco-10.jpg";
import deco12 from "../assets/assetid/deco-12.jpg";
import deco17 from "../assets/assetid/deco-17.jpg";
import decov1 from "../assets/assetid/deco-v-1.mp4";
import decov2 from "../assets/assetid/deco-v-2.mp4";
import decov3 from "../assets/assetid/deco-v-3.mp4";




export default function GetInvolve() {
  return (
    <div className="get-involve-container py-5 mt-5 pt-5">



{/* 
      {/* Volunteer Section */}
      {/* <section className="get-involve-section volunteer-section mt-5">
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
      </section> */}

      {/* Donate Section */}
      {/* <section className="get-involve-section donate-section">
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
      </section> */}

      {/* Partner Section */}
      {/* <section className="get-involve-section partner-section">
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
      </section>  */}

 
<div className="container text-center py-5">
  <h2 className="text-center mb-4 fst-italic coll">Our Projects</h2>

  <div className="row g-4 mb-5 justify-content-center">
    

    <div className="col-sm-6 col-lg-4 hover">
      <img src={deco5} className="img-fluid rounded shadow-sm w-100"  alt="Project 1"/>
    </div>

    <div className="col-sm-6 col-lg-4 hover">
      <img src={deco2} className="img-fluid rounded shadow-sm w-100"  alt="Project 2"/>
    </div>


    <div className="col-sm-6 col-lg-4 hover">
      <img src={deco3} className="img-fluid rounded shadow-sm w-100"  alt="Project 3"/>
    </div>

    <div className="col-sm-6 col-lg-4 hover">
      <img src={deco4} className="img-fluid rounded shadow-sm w-100"  alt="Project 4"/>
    </div>
    <div className="col-sm-6 col-lg-4 hover">
      <img src={deco6} className="img-fluid rounded shadow-sm w-100"  alt="Project 4"/>
    </div>
    <div className="col-sm-6 col-lg-4 hover">
      <img src={deco7} className="img-fluid rounded shadow-sm w-100"  alt="Project 4"/>
    </div>
    <div className="col-sm-6 col-lg-4 hover">
      <img src={deco12} className="img-fluid rounded shadow-sm w-100"  alt="Project 4"/>
    </div>
    <div className="col-sm-6 col-lg-4 hover">
      <img src={deco17} className="img-fluid rounded shadow-sm w-100"  alt="Project 4"/>
    </div>

  
    
  </div>


<div className='row container test-vd justify-content-center mx-auto '>
 
 <div className='col-12 col-lg-4'>
  <video src={decov1} autoPlay loop muted className="carousel-image">video</video>
 </div>
 <div className='col-12 col-lg-4'>
  <video src={decov2} autoPlay loop muted className="carousel-image">video</video>
 </div>
 <div className='col-12 col-lg-4'>
  <video src={decov3} autoPlay loop muted className="carousel-image">video</video>
 </div>

    
</div>












</div>













    </div>
  );
}
