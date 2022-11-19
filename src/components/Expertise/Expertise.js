import React from 'react';
import './Expertise.css';

const Expertise = () => {
  <script src="plugins/counto/counTo.js"></script>

  return (
    <div>
      <section className="section bg-gray" id="skillbar" >
        {/* data-aos="fade-up" */}
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
                <div className="mb-4 text-right"><h4 className="font-weight-normal">Html/Css </h4></div>
                <div className="progress">
                  <div className="progress-bar" data-percent="80">
                    <span className="percent-text"><span className="count">80</span>%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="skill-bar mb-4 mb-lg-0">
                <div className="mb-4 text-right"><h4 className="font-weight-normal">React</h4></div>
                <div className="progress">
                  <div className="progress-bar" data-percent="95">
                    <span className="percent-text"><span className="count">95</span>%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="skill-bar mb-4 mb-lg-0">
                <div className="mb-4 text-right"><h4 className="font-weight-normal">WordPress </h4></div>
                <div className="progress">
                  <div className="progress-bar" data-percent="70">
                    <span className="percent-text"><span className="count">70</span>%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="skill-bar mb-4 mb-lg-0">
                <div className=" mb-4 text-right"><h4 className="font-weight-normal">Web Development</h4></div>
                <div className="progress">
                  <div className="progress-bar" data-percent="82">
                    <span className="percent-text"><span className="count">82</span>%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Expertise