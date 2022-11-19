import React from 'react';
import ServiceCard from './ServiceCard';
import ServiceData from './ServiceData';
import './Services.css';

const Services = () => {
  return (
    <section className="section bg-gray" id="service">
      {/* data-aos="fade-up" */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <span className="text-color mb-0 text-uppercase letter-spacing text-sm"><i className="ti-minus mr-2"></i>What i do</span>
              <h2 className="title">Services</h2>
            </div>
          </div>
        </div>

        <div className="row no-gutters">
          {
            ServiceData.map((val, index) => {
              return <ServiceCard key={index} iClass={val.imageClasses} title={val.title} text={val.text} />
            })
          }
        </div>

        <div className="row align-items-center mt-5" >
          <div className="col-lg-6 mt-5">
            <h2 className="mb-5 text-lg-2 text-white-50">Let's <span className="text-white">work together</span> on your next project </h2>
          </div>
          <div className="col-lg-4 ml-auto text-right">
            <a href="#contact" className="btn btn-main text-white smoth-scroll">Hire Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services