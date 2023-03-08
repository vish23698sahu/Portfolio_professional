import React from 'react';
import './Blog.css';
import blogData from './BlogAPI_data';
import BlogCard from './BlogCard';

const Blog = () => {
  return (
    <section className="section border-top-1" id="blog" >
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
          {
            blogData.map((value, index) => {
              return <BlogCard key={index} imageSrc={value.image} admin={value.admin} type={value.type} title={value.title} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Blog