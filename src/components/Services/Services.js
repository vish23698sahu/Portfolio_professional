import React from 'react';
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
          {/* <div className="col-lg-4 col-md-6">
            <div className="card p-5 rounded-0">
              <i className="ti-layers text-lg-2 text-muted"></i>
              <h3 className="my-4 text-capitalize">Graphics Branding Design</h3>
              <p>It can change the way we feel about a company and the products & services they offer.</p>
            </div>
          </div> */}
          <div className="col-lg-4 col-md-6">
            <div className="card p-5 rounded-0">
              <i className="ti-layout text-lg-2 text-muted"></i>
              <h3 className="my-4 text-capitalize">Front End Design Development</h3>
              <p>It can change the way we feel about a company and the products & services they offer.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card p-5 rounded-0">
              <i className="ti-camera text-lg-2 text-muted"></i>
              <h3 className="my-4 text-capitalize">Videography Photography</h3>
              <p>It can change the way we feel about a company and the products & services they offer.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card  p-5 rounded-0">
              <i className="ti-desktop text-lg-2 text-muted"></i>
              <h3 className="my-4 text-capitalize">Wordpress Development</h3>
              <p>It can change the way we feel about a company and the products & services they offer.</p>
            </div>
          </div>
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