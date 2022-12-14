import React from 'react';
import PortfolioCard from './PortfolioCard';
import PortfolioData from './PortfolioData';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="section" id="portfolio" data-aos="fade-up">
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

      <div className="portfolio__container">
        <div className="post_gallery portfolio__container owl-theme">
          {/* owl-carousel */}
          {
            PortfolioData.map((value, index) => {
              return <PortfolioCard key={index} img={value.image} title={value.title} text={value.text} pUrl={value.pUrl} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio