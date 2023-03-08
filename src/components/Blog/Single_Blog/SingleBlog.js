import React from 'react';
import './SingleBlog.css';

const SingleBlog = () => {
    return (
        <section data-aos="fade-up">
            <section className="page-title">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="page-title text-center">
                                <p>Marketing,Startup</p>
                                <h1>20 startup ideas to grow</h1>
                            </div>
                        </div>
                        <i className='fas fa-times times__blog' ></i>
                    </div>
                </div>
            </section>

            <section className="section portfolio-single pt-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <img src="images/portfolio/b8.jpg" alt="back" className="img-fluid rounded" />

                            <p className="mt-4 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, omnis voluptatum iure expedita sequi obcaecati iste dolores debitis numquam, reprehenderit eum consequuntur cum, quam nesciunt esse tenetur architecto molestiae adipisci.</p>

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eum odit, cumque est quis autem iste reiciendis non libero quos, ipsam, consequatur asperiores eos aliquam beatae cupiditate praesentium ad! Amet consectetur adipisicing elit. Officia enim nihil accusamus error perspiciatis nam quas distinctio nobis.

                            <blockquote className="blockquote bg-gray p-5 my-4">
                                <i className="ti-quote-left mr-3"></i>Good design good business.Deliver the project wirthin time.its called professionalism. Build your site with care.
                            </blockquote>

                            <div className="row mt-5 p-4">
                                <div className="post-share">
                                    <a href="https://www.facebook.com/" className="facebook">Facebook</a>
                                    <a href="https://twitter.com/?lang=en-in" className="twitter">Twitter</a>
                                    <a href="https://www.instagram.com/" className="instagram">Instagram</a>
                                </div>
                            </div>

                            <div className="card bg-gray p-5 mt-4">
                                <h3 className="text-center mb-4">Leave a reply?</h3>
                                <form action="#" className="comment-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control bg-transparent" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control  bg-transparent" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="cmnt" id="cmnt" cols="30" rows="4" placeholder="Comments" className="form-control  bg-transparent"></textarea>
                                    </div>
                                    <div className="text-center">
                                        <a href="#blog" className="btn btn-main">Comment</a>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="blog-sidebar mt-5 mt-lg-0">
                                <div className="bg-gray rounded-bottom">
                                    <img src="images/blog/author.jpg" alt="" className="img-fluid rounded-top w-100" />
                                    <div className="text-center p-4">
                                        <h3 className="mt-4 mb-0">About Me</h3>
                                        <p className="lead">Creative designer & developer</p>
                                        <p>Working as a developer for 3 years. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>

                                <div className="p-5 mt-4">
                                    <h3 className="text-center mb-4">Latest Posts</h3>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#home" className="text-white d-block mb-1">Speed up your website in second</a>
                                            <span className="text-white-50">10 april 2019</span>
                                        </li>
                                        <li className="my-4">
                                            <a href="#home" className="text-white d-block mb-1">Speed up your website in second</a>
                                            <span className="text-white-50">05 april 2019</span>
                                        </li>
                                        <li>
                                            <a href="#home" className="text-white d-block mb-1">Speed up your website in second</a>
                                            <span className="text-white-50">04 april 2019</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="subscribe bg-gray p-4 mt-4">
                                    <h3 className="text-center mb-4">Subscribe for latest post!</h3>
                                    <input type="text" className="form-control bg-transparent mb-3" placeholder="Put Your Email" />
                                    <div className="text-center">
                                        <a href="#home" className="btn btn-light btn-small">Subscribe</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section >
    )
}

export default SingleBlog;