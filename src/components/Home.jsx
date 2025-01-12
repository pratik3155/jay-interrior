import React from 'react';
import './Home.css';
import Image from "../assets/pic2.jpeg";
import Image1 from "../assets/pic1.png";
import Image2 from "../assets/pic2.jpeg";
import Intro from "../assets/intro.jpg"
import Intro2 from "../assets/intro 2.jpg"
import Intro3 from "../assets/intro3.jpg"
import Impact1 from "../assets/impact1.jpg"
import { NavLink } from 'react-router-dom';




export default function Home() {
  return (
    <div>
      




      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>




  <div class="carousel-inner">
    
    <div class="carousel-item active background-properties main-slide-1 pt-5 ">
    <div className="mt-5 mb-5 pt-5">
    <div className="mt-5 pt-5">
    <div class="text-center text-light mt-5 pt-5">
            <h2 class="mt-5 display-3 fw-bold key-colour">UMANG SOCIAL FOUNDATION</h2>
            <p className="fs-3 key-colour">"Empowering Lives, Transforming Futures."</p>
           <NavLink className="btn btn-color donate-btn btn-success" to="/about">
                       Learn More
                     </NavLink>
          </div>
    </div>
    </div>
    </div>
    <div class="carousel-item  background-properties main-slide-2 pt-5 ">
    <div className="mt-5 mb-5 pt-5">
    <div className="mt-5 pt-5">
    <div class="text-center text-light mt-5 pt-5">
            <h2 class="mt-5 display-3 fw-bold key-colour">UMANG SOCIAL FOUNDATION</h2>
            <p className="fs-3 key-colour">"Empowering Lives, Transforming Futures."</p>
            <NavLink className="btn btn-color donate-btn btn-success" to="/about">
                       Learn More
                     </NavLink>
          </div>
    </div>
    </div>
    </div>
    <div class="carousel-item background-properties main-slide-3 pt-5 ">
    <div className="mt-5 mb-5 pt-5">
    <div className="mt-5 pt-5">
    <div class="text-center text-light mt-5 pt-5">
            <h2 class="mt-5 display-3 fw-bold key-colour">UMANG SOCIAL FOUNDATION</h2>
            <p className="fs-3 key-colour">"Empowering Lives, Transforming Futures."</p>
            <NavLink className="btn btn-color donate-btn btn-success" to="/about">
                       Learn More
                     </NavLink>
          </div>
    </div>
    </div>
    </div>








   










  </div>














  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>







































{/* <section className="mission-section mt-5 pt-5">
  <div className="mission-text container">
    <h2 className="fw-bold display-4 ">Who we are ?</h2>
    <p>
    <span className="fs-5 fw-bold">Umang Social Foundation</span> is a dedicated organization committed to uplifting underserved communities by addressing critical social and environmental challenges. We strive to empower the children of sugarcane workers by providing access to quality education and essential healthcare, ensuring a brighter future for the next generation. Additionally, we champion sustainability through our innovative cloth recycling initiatives, which not only reduce waste but also bring tangible benefits to those in need. At Umang, we are driven by the vision of creating a more equitable and sustainable world for all. 
    </p>
    
  </div>
   <div>
    <div className='row container fw-bold '>
      <div className='col-12 col-md-6 col-lg-4 '><img src="" alt="" /></div>
    </div>
   </div>
</section> */}


<section className="welcome-section">
  <div className="welcome-content">
    <div className="welcome-text">
      <h2 className="fw-bold display-4">Who we are?</h2>
      <p>
        <span className="fs-5 fw-bold">Umang Social Foundation</span> is a dedicated organization committed to uplifting underserved communities by addressing critical social and environmental challenges. We strive to empower the children of sugarcane workers by providing access to quality education and essential healthcare, ensuring a brighter future for the next generation.
      </p>
      <p>
        Additionally, we champion sustainability through our innovative cloth recycling initiatives, which not only reduce waste but also bring tangible benefits to those in need. At Umang, we are driven by the vision of creating a more equitable and sustainable world for all.
      </p>
      <NavLink className="btn btn-color donate-btn btn-success p-3" to="/about">
                       Learn More
                     </NavLink>
    </div>
    <div className="welcome-video">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Intro} className="d-block w-100 carousel-image" alt="Intro" />
          </div>
          <div className="carousel-item">
            <img src={Intro2} className="d-block w-100 carousel-image" alt="Intro 2" />
          </div>
          <div className="carousel-item">
            <img src={Intro3} className="d-block w-100 carousel-image" alt="Intro 3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






































































  {/* Programs Section */}
<section className="programs-section">
  <h2 className="homeh2">What We Do ?</h2>
  <div className="programs-grid">
    <div className="program-card">
      <i className="fas fa-graduation-cap program-icon"></i>
      <h3>Education</h3>
      <p>
        Bridging gaps in access to quality education for underserved communities.
      </p>
    </div>
    <div className="program-card">
      <i className="fas fa-heartbeat program-icon"></i>
      <h3>Health</h3>
      <p>
        Enhancing well-being through preventive care, health camps, and nutrition programs.
      </p>
    </div>
    <div className="program-card">
      <i className="fas fa-seedling program-icon"></i>
      <h3>Environment</h3>
      <p>
        Promoting sustainability through renewable energy and clean water projects.
      </p>
    </div>
  </div>
 
</section>






























































































    {/* Achievements Section */}
<section className="achievements-section">
  <h2 className="homeh2 wwa">Our Achievements</h2>
  <div className="achievements-container">
    <div className="achievement-item">
      <div className="achievement-content">
        <i className="fas fa-users achievement-icon"></i>
        <h3>390+</h3>
        <p>People Served</p>
      </div>
      <div className="achievement-decoration"></div>
    </div>
    <div className="achievement-item">
      <div className="achievement-content">
        <i className="fas fa-handshake achievement-icon"></i>
        <h3>5+</h3>
        <p>New Partnerships</p>
      </div>
      <div className="achievement-decoration"></div>
    </div>
    <div className="achievement-item">
      <div className="achievement-content">
        <i className="fas fa-dollar-sign achievement-icon"></i>
        <h3>15,000</h3>
        <p>Funds Raised</p>
      </div>
      <div className="achievement-decoration"></div>
    </div>
  </div>
</section>






































      

{/* Impact Section */}
<section className="impact-section">
  <h2 className="homeh2">Our Impact</h2>
  <div className="impact-container">
    <div className="impact-text">
      <blockquote>
        <i className="fas fa-quote-left"></i>
        Empowering young minds through education, one book, one pen, and one milestone at a time.
        <i className="fas fa-quote-right"></i>
      </blockquote>
      
      <p className="impact-description">
        Our initiatives continue to bring meaningful change by addressing critical issues in education and development, ensuring a brighter future for everyone we serve.
      </p>
    </div>
    <div className="impact-gallery">
      <div className="impact-image">
        <img src={Image1} alt="Impact Image 1" />
      </div>
      <div className="impact-image">
        <img src={Impact1} alt="Impact Image 2" />
      </div>
    </div>
  </div>
</section>


    
    </div>
  );
}
