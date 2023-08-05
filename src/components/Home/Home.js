import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Expertise from '../Expertise/Expertise';
import Portfolio from '../Portfolio/Portfolio';
import profilePic from '../images/profilephoto.png';
import './Home.css';

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
                <h1 className="font-weight-normal text-color text-md"><i className="ti-minus mr-2"></i>Full Stack Developer</h1>
                <h2 className="mt-3 text-lg mb-3 text-capitalize">Vishakha Sahu.</h2>
                <p className="animated fadeInUp lead mt-4 mb-5 text-white-50 lh-35">
                  Full Stack Developer with 2+ years of experience in building web APIs and user-friendly interfaces.<br />
                  Skilled in .Net web APIs, MS SQL, React, Data Structures and Algorithms.
                  Beyond my technical expertise, I am an avid reader, a lover of outdoor games, and a Yoga enthusiast.
                </p>
                <a href="#about" className="btn-solid-border btn-me btn mt-5 button_about">About Me</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      <Expertise />

      <Portfolio />

      <Contact />
    </div>
  )
}

export default Home;