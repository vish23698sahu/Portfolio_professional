import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section " id="about" data-aos="fade-up">
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
                <p className="text-white-50 text-md">Hello! Im <span className="text-white">Vishakha Sahu</span> a self-taught Digital <span className="text-white">Designer & Developer</span> with over <span className="text-white">1.5 years</span> of work experience.</p>
                <p className="text-white-50 text-md">Love the Web and the work I do. Work closely with my users to deliver the best <span className="text-white">possible solutions</span> for their requirements.</p>
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
      </div>
    </section>
  )
}

export default About