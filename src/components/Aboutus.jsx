import React from 'react';
import './Aboutus.css';
// import Trainer1 from "../assets/profile"; 
import Trainer2 from "../assets/profileimg-1.jpg";
import Trainer1 from "../assets/ravi-sir.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import vdbg from "../assets/assetid/video-bg.jpg"
import { faHeart, faBalanceScale, faUsers, faLeaf, faBook, faHandsHelping, faRecycle, faHome, faChampagneGlasses, faHouseLaptop , faPlay } from '@fortawesome/free-solid-svg-icons';

export default function Aboutus() {
  return (
    <div className="aboutus-container mt-5 pt-3">
      {/* About Us Section */}
      <div className="aboutus-section mt-5  bg-light rounded">
        <div className="header text-center ">

          
      <div className='aboutus-header background-properties text-center pt-5'>
      <h1 className="fw-bold text-light mt-5 pt-5 display-3">About Smart Home Decor</h1>
          <p className="text-muted fw-bold text-light">
          Transfer your home to heaven
          </p>
      </div>









          <p className='pt-lg-5 ps-lg-5 pe-lg-5'>
          At Smart Home Decor, we are passionate about turning everyday spaces into personalized havens of beauty, functionality, and comfort. With over 5 years of dedicated experience, we have earned a trusted name in the world of interior design and décor. Proudly based in Pune and Lonavala, we bring creative vision, technical expertise, and a client-first approach to every project, no matter the scale or budget.

We specialize in a comprehensive range of interior solutions designed to reflect your style while enhancing the utility and aesthetics of your environment. From custom furniture to thoughtful decor, we create spaces that not only reflect your personality but also serve as a haven for your well-being and relaxation.
          </p>
          <p className='p-lg-5'>Our mission is simple yet powerful — to deliver exceptional quality at an affordable price. We don’t just aim to decorate your space; we strive to elevate your lifestyle. Every project we undertake is a partnership with our clients, where your ideas and preferences are at the heart of the design process.

From cozy homes and chic apartments to elegant offices and luxurious villas, we approach each space with the same passion, precision, and attention to detail. At Smart Home Decor, we don’t just design interiors — we design experiences.

Let us help you transform your space into a timeless expression of your personality and taste.</p>
        </div>

        {/* Core Values Section */}
        <div className="core-values-section py-5 bg-light">
          <div className="container text-center">
            <h2 className="fw-bold mb-4">Interior design is for everyone.</h2>
            <div className="row justify-content-center">
              <div className="col-12 col-md-4 mb-4">
                <div className="value-card p-4 shadow-sm rounded">
                  <FontAwesomeIcon icon={faHome} size="3x" className="mb-3" style={{ color: '#E77119' }} / >
                  <h5 className="fw-semibold">HOME INTERIOR</h5>
                  <p className="text-muted">You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time</p>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <div className="value-card p-4 shadow-sm rounded">
                  <FontAwesomeIcon icon={faChampagneGlasses} size="3x" className=" mb-3" style={{ color: '#E77119' }} />
                  <h5 className="fw-semibold">PARTY INTERIOR</h5>
                  <p className="text-muted">You deserve a space that celebrates life with color, lights, and energy. Don’t wait for a special occasion — create one right at home.</p>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <div className="value-card p-4 shadow-sm rounded">
                  <FontAwesomeIcon icon={faHouseLaptop} size="3x" className=" mb-3" style={{ color: '#E77119' }} />
                  <h5 className="fw-semibold">OFFICE INTERIOR</h5>
                  <p className="text-muted">You deserve a workspace that fuels focus and inspires creativity. Don’t settle for dull surroundings when brilliance begins with design.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* Experienced Trainers Section */}


    







     
    </div>
   
  );
}
