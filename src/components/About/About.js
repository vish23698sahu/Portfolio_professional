import React from 'react';
import resume from './media/Resume_Vishakha.pdf';
import './About.css';

const About = () => {
  return (
    <section className="section " id="about">
      <div className="container">
        <div className='section-title text-center'>
          <span className="text-color mb-0 text-uppercase letter-spacing text-sm"> <i className="ti-minus mr-2"></i>ME</span>
          <h1 className="title">About</h1>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="row">
              <div className="col-lg-4">
                <h2><i className="ti-minus"></i>Myself</h2>
              </div>
              <div className="col-lg-8">
                <p className="text-white-50 text-md">Greetings! I'm <span className="text-white">Vishakha Sahu,</span> a proficient <span className="text-white">Full Stack Developer</span> boasting more than <span className="text-white">2 years</span> of industry experience.</p>
                <p className="text-white-50 text-md">With a deep-seated passion for the world of Web, every project I undertake is a labor of love.<p>I believe in fostering strong relationships with my clients, </p> striving to deliver tailor-made solutions that perfectly align with their unique requirements.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 mt-md-0 col-md-6">
            <div className="row">
              <div className="col-lg-3">
                <h2><i className="ti-minus"></i>Skills</h2>
              </div>
              <div className="col-lg-9 pl-5">
                <p className="text-white-50 text-md">
                  My exposure as a Full Stack Developer.
                </p>

                <ul className="list-unstyled lh-45">
                  <li> <i className="ti-check mr-3 text-color"></i><span className="text-white-50">Web Designing</span> - HTML/CSS</li>
                  <li><i className="ti-check mr-3 text-color"></i><span className="text-white-50">Web Development</span> - REACT/NODEJS</li>
                  <li><i className="ti-check mr-3 text-color"></i><span className="text-white-50">Application Dev</span> - DOTNET/MYSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a className="btn-main text-white btn mt-5" href={resume} download >Download Resume</a>
        </div>
      </div>
    </section>
  )
}

export default About;