import React from 'react';
import './Home.css';
import Image from "../assets/pic2.jpeg";
import Image1 from "../assets/pic1.png";
import Image2 from "../assets/pic2.jpeg";
import Intro from "../assets/intro.jpg"
import Intro2 from "../assets/intro 2.jpg"
import Intro3 from "../assets/intro3.jpg"
import Impact1 from "../assets/assetid/owner.png"
import { NavLink } from 'react-router-dom';
import video from "../assets/assetid/intro.mp4";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import testimonial from "../assets/assetid/testimonial.mp4";


const testimonials = [
  {
    rating: 5,
    title: "What a great experience!",
    content: "You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time.",
    author: "Barb Ackue"
  },
  {
    rating: 5,
    title: "I would recommend service",
    content: "You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time.",
    author: "Barb Ackue"
  },
  {
    rating: 5,
    title: "This design service",
    content: "You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time.",
    author: "Barb Ackue"
  },
  {
    rating: 5,
    title: "Brilliant work",
    content: "You deserve a home that is functional and stylish, today. Don’t put it off until the kids are older or you have more time.",
    author: "Barb Ackue"
  }
];

const options = {
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
};




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
            <h2 class="mt-5 display-3 fw-bold key-colour"> <span className="display-3 fw-bold key-colour spa " >SMART</span> HOME DECOR</h2>
            <p className="fs-3 key-colour">"Transfer your home to heaven"</p>
           <NavLink className="btn btn-color rounded-pill p-lg-3 donate-btn btn-secondary " to="/about">
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
            <h2 class="mt-5 display-3 fw-bold key-colour"><span className="display-3 fw-bold key-colour spa " >SMART</span> HOME DECOR</h2>
            <p className="fs-3 key-colour">"Transfer your home to heaven"</p>
            <NavLink className="btn rounded-pill p-lg-3 btn-color donate-btn btn-secondary " to="/about">
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
            <h2 class="mt-5 display-3 fw-bold key-colour"><span className="display-3 fw-bold key-colour spa " >SMART</span> HOME DECOR</h2>
            <p className="fs-3 key-colour">"Transfer your home to heaven"</p>
            <NavLink className="btn btn-color p-lg-3 rounded-pill donate-btn btn-secondary" to="/about">
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
      <h2 className="fw-bold display-4">About Us</h2>
      <p>
      At<span style={{ color: '#e77119', fontStyle: 'italic'}} className="fs-5 fw-bold"> Smart Home Decor,</span> we bring over 5 years of expertise in transforming spaces into elegant and functional masterpieces. Based in Pune and Lonavala, we specialize in a wide range of interior solutions including POP, furniture, landscape designing, artistic wall paintings, and more — all tailored to fit your taste and budget. What sets us apart is our unique flair for combining colors that perfectly complement your interiors, creating harmonious and vibrant living environments.
      </p>
      <p>
      We also thoughtfully integrate principles of <span className='fw-bold'><u>Vastu Shastra</u></span> to ensure positivity and balance in every project. Our mission is simple — to deliver high-quality work that enhances your lifestyle, without compromising on affordability. Whether it's a cozy home, a modern office, or a luxurious villa, Smart Home Decor is your trusted partner in redefining interior spaces with creativity, precision, and care.
      </p>
      <NavLink style={{backgroundColor:'#e77119'}} className="btn btn-color border-0  donate-btn btn-success p-3" to="/about">
                       Learn More
                     </NavLink>
    </div>


























    <div className="welcome-video">
      {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
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
      </div> */}

 <video src={video} autoPlay loop muted className="carousel-image">video</video>

    

    </div>



































































  </div>
</section>





































































  {/* Programs Section */}
<section className="programs-section">
  <h2 className="homeh2">What We Do ?</h2>
  <div className="programs-grid">
    <div className="program-card">
    <i class="fas fs-1 fa-solid fa-paintbrush pb-3" style={{color: '#e67118'}}></i>
      <h3>Customized Paintings & Wall Art</h3>
      <p>
      Unique artistic pieces that align with your décor and elevate your walls.
      </p>
    </div>
    <div className="program-card">
    <i class="fas fs-1 fa-solid fa-couch pb-3" style={{color: '#e67118'}}></i>
      <h3>Modular Furniture Solutions</h3>
      <p>
      Space-saving, stylish, and tailor-made furniture to suit your interiors perfectly.
      </p>
    </div>
    <div className="program-card">
    <i class="fas fs-1 fa-solid fa-hands-praying pb-3" style={{color: '#e67118'}}></i>
      <h3>Vastu-Aligned Interior Planning</h3>
      <p>
      Designs that follow traditional Vastu principles to promote balance, positivity, and wellness.
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
        <i className="fas fa-home achievement-icon" style={{color: '#e67118'}}></i>
        <h3>50+</h3>
        <p>Projects Delivered</p>
      </div>
      <div className="achievement-decoration"></div>
    </div>
    <div className="achievement-item">
      <div className="achievement-content">
      <i className="fas fa-handshake achievement-icon" style={{color: '#e67118'}}></i>
        <h3>5+</h3>
        <p>Years of Experience & Trust</p>
      </div>
      <div className="achievement-decoration"></div>
    </div>
    <div className="achievement-item">
      <div className="achievement-content">
      <i className="fas fa-location-dot achievement-icon" style={{color: '#e67118'}}></i>
        <h3>30+</h3>
        <p>Locations Served All Across Pune </p>
      </div>
      <div className="achievement-decoration"></div>
    </div>
  </div>
</section>
{/* Impact Section */}
<section className="impact-section">
  <h2 className="homeh2">The Soul Behind Our Work</h2>
  <div className="impact-container">
    <div className="impact-text">
      <blockquote>
        <i className="fas fa-quote-left"></i>
        "I don't just design spaces, I craft emotions—because every corner should feel like home to the heart that lives in it."
        <i className="fas fa-quote-right"></i>
        <p className="font-size14 text-secondary fw-light">Jay Mene (Founder and Owner)</p>
      </blockquote>
    </div>
    <div className="impact-gallery">
      {/* <div className="impact-image">
        <img src={Image1} alt="Impact Image 1" />
      </div> */}
      <div className="impact-image">
        <img src={Impact1} alt="Impact Image 2" />
      </div>
    </div>
  </div>
</section>



{/* testimonial section */}

<section style={{ backgroundColor: '#f4c7a5', padding: '10rem 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1 rem' }} className='fw-bold'>Customer Testimonial</h2>
      <div className="container">
        <OwlCarousel className="owl-theme" {...options}>
          {testimonials.map((testimonial, index) => (
            <div className="item" key={index}>
              <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px' }} className='pb-5 pt-5'>
                <div style={{ color: '#f97316' }}>{'★'.repeat(testimonial.rating)}</div>
                <h4 style={{ marginTop: '1rem' }} className='fw-bold'>{testimonial.title}</h4>
                <p style={{ marginTop: '0.5rem' }}>{testimonial.content}</p>
                <p style={{ fontStyle: 'italic', marginTop: '1rem' }} className='text-decoration-underline'>by {testimonial.author}</p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
      <div className='row justify-content-center'>
          <div className=' col-lg-6 rounded rounded-0'>
            <video src={testimonial} controls className="carousel-image">video</video>
            </div>  
      </div>
    </section>












































    </div>
  );
}
