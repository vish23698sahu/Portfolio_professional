import React from 'react';
import profilePic from '../images/profilephoto.png';
import './Home.css';

const Home = () => {
  return (
    <section className="slider py-7 ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-sm-12 col-12 col-md-5">
            <div className="slider-img position-relative">
              <img src={profilePic} alt="profile" className="img-fluid w-100" />
            </div>
          </div>

          <div className="col-lg-6 col-12 col-md-7">
            <div className="ml-5 position-relative mt-5 mt-lg-0">
              <span className="head-trans">Vishakha</span>
              <h1 className="font-weight-normal text-color text-md"><i className="ti-minus mr-2"></i>Theme Developer</h1>
              <h2 className="mt-3 text-lg mb-3 text-capitalize">Vishakha Sahu.</h2>
              <p className="animated fadeInUp lead mt-4 mb-5 text-white-50 lh-35">I work in the sweet spot for innovation, somewhere between strategy, design and technology.I love the Web and the work we do.</p>
              <a href="#about" className="btn-solid-border btn">About Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home