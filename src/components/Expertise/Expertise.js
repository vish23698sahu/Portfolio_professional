import React from 'react';
import './Expertise.css';

const Expertise = () => {
  return (
    <section className="section bg-gray" id="skillbar">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <span className="text-color mb-0 text-uppercase letter-spacing text-sm"><i className="ti-minus mr-2"></i>Skills Set</span>
              <h2 className="title">Expertise</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="skill-bar mb-4 mb-lg-0">
              <div className="mb-4 text-right"><h4 className="font-weight-normal">Expert</h4></div>
              <div className="progress">
                <div className="progress-bar" data-percent="90">
                  <span className="percent-text skill__text ">Html/Css</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="skill-bar mb-4 mb-lg-0">
              <div className="mb-4 text-right"><h4 className="font-weight-normal">Expert</h4></div>
              <div className="progress">
                <div className="progress-bar" data-percent="90">
                  <span className="percent-text skill__text">React</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="skill-bar mb-4 mb-lg-0">
              <div className="mb-4 text-right"><h4 className="font-weight-normal">Beginner</h4></div>
              <div className="progress">
                <div className="progress-bar" data-percent="65">
                  <span className="percent-text skill__text">NodeJS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="skill-bar mb-4 mb-lg-0">
              <div className=" mb-4 text-right"><h4 className="font-weight-normal">Profecient</h4></div>
              <div className="progress">
                <div className="progress-bar" data-percent="80">
                  <span className="percent-text skill__text">Dotnet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise