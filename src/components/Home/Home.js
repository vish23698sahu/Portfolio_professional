import React from 'react';
import profilePic from '../images/profilephoto.png';
import './Home.css';
import About from '../About/About';
import Expertise from '../Expertise/Expertise';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <div>

      <section id='home' className="slider py-7">
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
                <h1 className="font-weight-normal text-color text-md"><i className="ti-minus mr-2"></i>Web Developer</h1>
                <h2 className="mt-3 text-lg mb-3 text-capitalize">Vishakha Sahu.</h2>
                <p className="animated fadeInUp lead mt-4 mb-5 text-white-50 lh-35">
                  A Front End Web Developer, Highly engaged in building clean front end code.<br />
                  Well organized person, problem solver, with love for books, outdoor games, and Yoga.
                </p>
                <a href="#about" className="btn-solid-border btn-me btn mt-5 ">About Me</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <About />

      {/* Expertise */}
      <Expertise />

      {/* Portfolio */}
      <Portfolio />

      {/* Contact */}
      <Contact />

    </div>
  )
}

export default Home