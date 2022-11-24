import React from 'react';
import './Expertise.css';

const Expertise = () => {
  return (
    <section class="section bg-gray" id="skillbar" data-aos="fade-up">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="section-title text-center">
              <span class="text-color mb-0 text-uppercase letter-spacing text-sm"><i class="ti-minus mr-2"></i>Skills Set</span>
              <h2 class="title">Expertise</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="skill-bar mb-4 mb-lg-0">
              <div class="mb-4 text-right"><h4 class="font-weight-normal">Profecient</h4></div>
              <div class="progress">
                <div class="progress-bar" data-percent="80">
                  <span class="percent-text skill__text ">Html/Css</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="skill-bar mb-4 mb-lg-0">
              <div class="mb-4 text-right"><h4 class="font-weight-normal">Profecient</h4></div>
              <div class="progress">
                <div class="progress-bar" data-percent="85">
                  <span class="percent-text skill__text">React</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="skill-bar mb-4 mb-lg-0">
              <div class="mb-4 text-right"><h4 class="font-weight-normal">Beginner</h4></div>
              <div class="progress">
                <div class="progress-bar" data-percent="95">
                  <span class="percent-text skill__text">WordPress</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="skill-bar mb-4 mb-lg-0">
              <div class=" mb-4 text-right"><h4 class="font-weight-normal">Profecient</h4></div>
              <div class="progress">
                <div class="progress-bar" data-percent="60">
                  <span class="percent-text skill__text">Dotnet</span>
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