import React from 'react';
import './Mission.css';
import { NavLink, useLocation } from 'react-router-dom';
import Image9 from "../assets/team.jpeg";
import Impactimg1 from "../assets/impa.jpg";
import Impactimg2 from "../assets/impa4.jpg";
import Impactimg3 from "../assets/impa3.jpg";
import abtds from "../assets/assetid/about1.jpg";
import { faCompassDrafting, faCouch, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Mission() {
  return (
    <div className="">
      

      {/* <div className="mission-images">
        <img src={Image9} alt="Education" />
        <img src={Impactimg1} alt="Healthcare" />
        <img src={Impactimg2} alt="Hygiene" />
        <img src={Impactimg3} alt="Sustainability" />
      </div> */}

      <div className='row container mx-auto  abtds mb-5 '>

        <div className='col-12 col-lg-6'>
          <div className='mt-lg-3 pt-lg-4 ps-lg-5 text-center'>
            <h2 className='display-4 text-center text-lg-start fw-bold  pt-lg-5 ps-lg-4 pe-lg-5 '>Design the
            home you love</h2>
            <p className='p-lg-4 text-lg-start text-center fs-5'>With over 5  years of combined experience, our mission is to design with your values and vision in mind. We’re out to create purposeful spaces that balance art and creativity with science and strategy.</p>
            <NavLink className="btn btn-color mx-auto donate-btn  rounded-pill text-center spa " to="/contact">
                       Get a Free Quotation 
                     </NavLink>
          </div>
        </div>

        <div className='col-12 col-lg-5'>
          <div className='abtds-img pe-lg-5'>
            <img src={abtds} alt="" />
          </div>
        </div>

      </div>


      
    </div>
  );
}
