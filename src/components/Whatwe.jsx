import React from 'react';
import './Whatwedo.css';
import Image4 from "../assets/pic1.png"; 
import Samarpan from "../assets/samarpan.jpg";
import Team from "../assets/team.jpeg"; // Main image for initiatives
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBalanceScale, faUsers, faLeaf, faBook, faHandsHelping, faRecycle, faHome, faChampagneGlasses, faHouseLaptop , faPlay, faUser, faHeadphones, faRocket, faDiamond } from '@fortawesome/free-solid-svg-icons';
import { faComment, faGem, faRectangleList } from '@fortawesome/free-regular-svg-icons';
export default function Whatwe() {
  return (
    <div className="what-we-do mt-4  pt-5 ps-0 pe-0 ">
      <div className='service-bg text-center mb-5'>
      <h2 className="fw-bold display-4  mt-5 pt-lg-5 text-light">Services</h2>
   <p className='text-light'>Who are in extremely love with eco friendly system..</p>
      </div>
      <div className="text-center ">
       

        {/* Initiatives Section */}
        
        {/* <div className="initiatives">
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
        </div> */}


<section className="programs-section">
  <h2 className="homeh2">What we offer to our clients</h2>
  <div className="programs-grid">
    <div className="program-card p-lg-5 serv-card">
    {/* <i class="fas fs-1 fa-solid fa-paintbrush pb-3" style={{color: '#e67118'}}></i> */}
      <h3 className='fw-light fst-italic'>Interior Design</h3>
      <p className='fw-light fst-italic'>
      Unique artistic pieces that align with your décor and elevate your walls.
      </p>
    </div>
    <div className="program-card p-lg-5 serv-card">
    {/* <i class="fas fs-1 fa-solid fa-couch pb-3" style={{color: '#e67118'}}></i> */}
      <h3 className='fw-light fst-italic'>Architecture Design</h3>
      <p className='fw-light fst-italic'>
      Space-saving, stylish, and tailor-made furniture to suit your interiors perfectly.
      </p>
    </div>
    <div className="program-card p-lg-5 serv-card">
    {/* <i class="fas fs-1 fa-solid fa-hands-praying pb-3" style={{color: '#e67118'}}></i> */}
      <h3 className='fw-light fst-italic'>Concept Design</h3>
      <p className='fw-light fst-italic'>
      Designs that follow traditional Vastu principles to promote balance, positivity, and wellness.
      </p>
    </div>
  </div>
</section>








        {/* Call-to-Action Section */}
        <div className="bgc text-light text-center mt-5 p-5 rounded-0">
          <h3 className="fw-light text-light mb-4 pb-5 fst-italic">Some Features that Made us Unique</h3>
          {/* <p className="text-light mb-4">Join our mission to empower communities and create sustainable change.</p> */}

            <div className="row justify-content-center">
                       




                        <div className="col-12 col-md-4 mb-4">
                          <div className="value-card p-4 shadow-sm border border-3 rounded ddd">
                            
                            <h5 className="fw-light"><FontAwesomeIcon icon={faUsers} size="1x"/>  EXPERT TECHNICIANS</h5>
                            <p className="text-muted">Our team consists of skilled technicians with hands-on expertise in every aspect of interior work, ensuring precision and top-quality finishes. From electrical fittings to furniture detailing, we deliver with unmatched craftsmanship.</p>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                          <div className="value-card p-4 shadow-sm border border-3 rounded ddd">
                            
                            <h5 className="fw-light"><FontAwesomeIcon icon={faRectangleList} size="1x"/>  PROFESSIONAL SERVICE</h5>
                            <p className="text-muted">We pride ourselves on maintaining the highest level of professionalism in every project. Timely execution, transparent communication, and attention to detail define our approach from start to finish</p>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                          <div className="value-card p-4 shadow-sm border border-3 rounded ddd">
                            
                            <h5 className="fw-light"><FontAwesomeIcon icon={faHeadphones} size="1x"/>  GREAT SUPPORT</h5>
                            <p className="text-muted">Your satisfaction is our priority — which is why our support team is always available to assist you before, during, and after project completion. Expect prompt responses and a customer-first attitude every step of the way.</p>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                          <div className="value-card p-4 shadow-sm border border-3 rounded ddd">
                            
                            <h5 className="fw-light"><FontAwesomeIcon icon={faRocket} size="1x"/>  TECHNICAL SKILLS</h5>
                            <p className="text-muted">With a strong foundation in interior design technologies and materials, our team brings innovative solutions that are both functional and stylish. We stay updated with the latest trends and techniques to offer modern, efficient results.</p>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                          <div className="value-card p-4 shadow-sm border border-3 rounded ddd">
                            
                            <h5 className="fw-light"><FontAwesomeIcon icon={faGem} size="1x"/>  HIGHLY RECOMENDED</h5>
                            <p className="text-muted">Trusted by homeowners and businesses alike, our past clients often refer us for our quality craftsmanship, transparency, and ability to turn ideas into reality.</p>
                          </div>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                          <div className="value-card p-4 shadow-sm border border-3 rounded ddd">
                            
                            <h5 className="fw-light"><FontAwesomeIcon icon={faComment} size="1x"/>  POSITIVE REVIEWS</h5>
                            <p className="text-muted">We’re proud to have consistently received glowing reviews from satisfied customers who appreciate our creativity, commitment, and collaborative approach.

</p>
                          </div>
                        </div>











                      </div>

         
        </div>
      </div>
    </div>
  );
}
