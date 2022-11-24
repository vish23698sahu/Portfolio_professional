import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
    return (
        <div>
            <div className="col-md-8 blog__card__container">
                <div className="position-relative blog-item mb-5 mb-lg-0">
                    <img src={props.imageSrc} alt="blog-1" className="" width='300px' />

                    <div className="pl-6 blog__title__width">
                        <Link to='/singleBlog'><h3 className="mb-4 ">{props.title}</h3></Link>
                        <a href="blog-single.html" className="learn-more text-uppercase text-sm"><i className="ti-arrow-right mr-2"></i>Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard