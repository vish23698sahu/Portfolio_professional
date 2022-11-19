import React from 'react';
import './Blog.css';
import blog1 from '../images/blog/blog1.png'
import blog2 from '../images/blog/blog2.png'
import blog3 from '../images/blog/blog3.png'

const Blog = () => {
  return (
    <section className="section border-top-1" id="blog">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <span className="text-color mb-0 text-uppercase letter-spacing text-sm"> <i className="ti-minus mr-2"></i>blog news</span>
              <h1 className="title">Latest Article</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="position-relative blog-item mb-5 mb-lg-0">
              <img src={blog1} alt="blog-1" className="img-fluid" width='300px' />

              <div className="blog-item-meta mb-3">
                <span><i className="ti-user mr-2"></i>by Admin</span>
                <span className="text-muted mx-2"> | </span>
                <span className="text-white-50">Photography</span>
              </div>

              <div className="pl-4">
                <a href="blog-single.html"><h3 className="mb-4 ">20 Best Startup Ideas for Designers</h3></a>

                <a href="blog-single.html" className="learn-more text-uppercase text-sm"><i className="ti-arrow-right mr-2"></i>Learn more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="position-relative blog-item mb-5 mb-lg-0">
              <img src={blog2} alt="blog-1" className="img-fluid" width='400px' />

              <div className="blog-item-meta mb-3">
                <span><i className="ti-user mr-2"></i>by Admin</span>
                <span className="text-muted mx-2"> | </span>
                <span className="text-white-50">Branding</span>
              </div>
              <div className="pl-4">
                <a href="blog-single.html"><h3 class="mb-4">How to Incorporate Branding into Your Event</h3></a>

                <a href="blog-single.html" class="learn-more text-uppercase text-sm"><i className="ti-arrow-right mr-2 show"></i>Learn more</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="position-relative blog-item mb-5 mb-lg-0">
              <img src={blog3} className="img-fluid" width='400px' />

              <div className="blog-item-meta mb-3">
                <span><i className="ti-user mr-2"></i>by Admin</span>
                <span className="text-muted mx-2"> | </span>
                <span className="text-white-50">Marketing</span>
              </div>
              <div className="pl-4">
                <a href="blog-single.html"><h3 className="mb-4 ">The Value of Video in Content Marketing</h3></a>
                <a href="blog-single.html" className="learn-more text-uppercase text-sm"><i className="ti-arrow-right mr-2"></i>Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Blog