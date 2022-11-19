import React from 'react';
import './Blog.css';

const BlogCard = (props) => {
    return (
        <div>
            <div className="col-md-8 blog__card__container">
                {/* col-lg-4   */}
                <div className="position-relative blog-item mb-5 mb-lg-0">
                    <img src={props.imageSrc} alt="blog-1" className="" width='300px' />
                    {/* img-fluid */}

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
        </div>
    )
}

export default BlogCard