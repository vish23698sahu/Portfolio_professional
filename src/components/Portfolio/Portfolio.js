import React from 'react';
import './Portfolio.css';
import doIt from '../images/portfolio/DOIT.png'
import quote from '../images/portfolio/quote.png';
import social from '../images/portfolio/social.png';
import song from '../images/portfolio/song.png';

const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <span className="text-color mb-0 text-uppercase letter-spacing text-sm"><i className="ti-minus"></i>works</span>
              <h2 className="title">Portfolio</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">

        <div className="row">

          <div className="post_gallery owl-theme">
            {/* owl-carousel */}
            <div className="item">
              <div className="portfolio-item position-relative">
                <img src={doIt} className="img-fluid" alt="do it" width='450px' />

                <div className="portoflio-item-overlay">
                  <a href="#"><i className="ti-plus"></i></a>
                </div>
              </div>
              <div className="text mt-3">
                <h4 className="mb-1 text-capitalize">Web development</h4>
                <p className="text-uppercase letter-spacing text-sm">wordpress</p>
              </div>
            </div>
            <div className="item">
              <div className="portfolio-item position-relative">
                <img src={quote} alt="quote" className="img-fluid" width='450px' />

                <div className="portoflio-item-overlay">
                  <a href="portfolio-single.html"><i className="ti-plus"></i></a>
                </div>
              </div>
              <div className="text mt-3">
                <h4 className="mb-1 text-capitalize">Web development</h4>
                <p className="text-uppercase letter-spacing text-sm">wordpress</p>
              </div>
            </div>
            <div className="item">
              <div className="portfolio-item position-relative">
                <img src={social} alt="social" className="img-fluid" width='450px' />

                <div className="portoflio-item-overlay">
                  <a href="portfolio-single.html"><i className="ti-plus"></i></a>
                </div>
              </div>
              <div className="text mt-3">
                <h4 className="mb-1 text-capitalize">Web development</h4>
                <p className="text-uppercase letter-spacing text-sm">wordpress</p>
              </div>
            </div>
            <div className="item">
              <div className="portfolio-item position-relative">
                <img src={song} alt="song" className="img-fluid" width='450px' />

                <div className="portoflio-item-overlay">
                  <a href="portfolio-single.html"><i className="ti-plus"></i></a>
                </div>
              </div>
              <div className="text mt-3">
                <h4 className="mb-1 text-capitalize">Web development</h4>
                <p className="text-uppercase letter-spacing text-sm">wordpress</p>
              </div>
            </div>

          </div>
        </div>


      </div>
    </section>
  )
}

export default Portfolio