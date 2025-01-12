import React from 'react';
import './Aboutus.css';
import Trainer1 from "../assets/pass.jpg"; // Replace with the actual image path
// import Trainer2 from "../assets/trainer2.jpg"; // Replace with the actual image path
// import Trainer3 from "../assets/trainer3.jpg"; // Replace with the actual image path
// import Trainer4 from "../assets/trainer4.jpg"; // Replace with the actual image path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBalanceScale, faUsers, faLeaf, faBook, faHandsHelping, faRecycle } from '@fortawesome/free-solid-svg-icons';

export default function Aboutus() {
  return (
    <div className="aboutus-container mt-5 pt-5">
      {/* About Us Section */}
      <div className="aboutus-section mt-5  bg-light rounded">
        <div className="header text-center ">
          <h1 className="fw-bold">About Umang Social Foundation</h1>
          <p className="text-muted">
            Empowering marginalized communities through education, healthcare, and sustainability.
          </p>
          <p>
            At Umang Social Foundation, we envision a world where every individual, regardless of socio-economic background, has access to essential rights such as education, healthcare, and hygiene, alongside opportunities for sustainable growth and development. We aim to build inclusive communities where no one is left behind and everyone is empowered to realise their full potential.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="core-values-section py-5 bg-light">
          <div className="container text-center">
            <h2 className="fw-bold mb-4">Our Core Values</h2>
            <div className="row justify-content-center">
              <div className="col-12 col-md-4 mb-4">
                <div className="value-card p-4 shadow-sm rounded">
                  <FontAwesomeIcon icon={faHeart} size="3x" className="text-danger mb-3" />
                  <h5 className="fw-semibold">Compassion</h5>
                  <p className="text-muted">Empowering communities with empathy and care.</p>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <div className="value-card p-4 shadow-sm rounded">
                  <FontAwesomeIcon icon={faBalanceScale} size="3x" className="text-primary mb-3" />
                  <h5 className="fw-semibold">Integrity</h5>
                  <p className="text-muted">Upholding honesty and transparency in all actions.</p>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <div className="value-card p-4 shadow-sm rounded">
                  <FontAwesomeIcon icon={faUsers} size="3x" className="text-success mb-3" />
                  <h5 className="fw-semibold">Inclusivity</h5>
                  <p className="text-muted">Fostering equality and unity across communities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experienced Trainers Section */}
      <section className="trainers-section py-5">
        <div className="text-center">
          <h4 className="fs-1 fw-bold">Our Experienced Team</h4>
          <p>Who are in extremely love with eco-friendly systems.</p>
        </div>
        <div className="row container mx-auto column-gap-1 mt-2  trainers">
          {[
            { name: "Ethel Davis", role: "Managing Director (Sales)", image: Trainer1 },
            { name: "Roodney Cooper", role: "Creative Art Director (Sales)", image: Trainer1 },
            { name: "Dora Walker", role: "Core Developer", image: Trainer1 },
            
          ].map((trainer, index) => (
            <div className="col-12 col-md text-center mt-5" key={index}>
              <div className="trainer-card position-relative">
                <img
                  src={trainer.image}
                  alt={`${trainer.name}`}
                  className="trainer-image "
                />
                {/* <div className="insta position-absolute bottom-0 start-0 end-0 d-flex justify-content-center pb-3">
                  <a href="#">
                    <i className="fa-brands fa-instagram fs-2 mx-2" style={{ color: "#fff" }}></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter fs-2 mx-2" style={{ color: "#fff" }}></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-facebook fs-2 mx-2" style={{ color: "#fff" }}></i>
                  </a>
                </div> */}
              </div>
              <div>
                <h4 className="h5 mt-3">{trainer.name}</h4>
                <p className="font-size14 text-secondary fw-light">{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
