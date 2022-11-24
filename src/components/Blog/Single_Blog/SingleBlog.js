import React from 'react';
import './SingleBlog.css';

const SingleBlog = () => {
    return (
        <section data-aos="fade-up">
            <section class="page-title">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="page-title text-center">
                                <p>Marketing,Startup</p>
                                <h1>20 startup ideas to grow</h1>
                            </div>
                        </div>
                        <i className='fas fa-times times__blog' ></i>
                    </div>
                </div>
            </section>

            <section class="section portfolio-single pt-0">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-md-12">
                            <img src="images/portfolio/b8.jpg" alt="back" class="img-fluid rounded" />

                            <p class="mt-4 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, omnis voluptatum iure expedita sequi obcaecati iste dolores debitis numquam, reprehenderit eum consequuntur cum, quam nesciunt esse tenetur architecto molestiae adipisci.</p>

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eum odit, cumque est quis autem iste reiciendis non libero quos, ipsam, consequatur asperiores eos aliquam beatae cupiditate praesentium ad! Amet consectetur adipisicing elit. Officia enim nihil accusamus error perspiciatis nam quas distinctio nobis.

                            <blockquote class="blockquote bg-gray p-5 my-4">
                                <i class="ti-quote-left mr-3"></i>Good design good business.Deliver the project wirthin time.its called professionalism. Build your site with care.
                            </blockquote>

                            <div class="row mt-5 p-4">
                                <div class="post-share">
                                    <a href="https://www.facebook.com/" class="facebook">Facebook</a>
                                    <a href="https://twitter.com/?lang=en-in" class="twitter">Twitter</a>
                                    <a href="https://www.instagram.com/" class="instagram">Instagram</a>
                                </div>
                            </div>

                            <div class="card bg-gray p-5 mt-4">
                                <h3 class="text-center mb-4">Leave a reply?</h3>
                                <form action="#" class="comment-form">
                                    <div class="form-group">
                                        <input type="text" class="form-control bg-transparent" placeholder="Name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control  bg-transparent" placeholder="Email" />
                                    </div>
                                    <div class="form-group">
                                        <textarea name="cmnt" id="cmnt" cols="30" rows="4" placeholder="Comments" class="form-control  bg-transparent"></textarea>
                                    </div>
                                    <div class="text-center">
                                        <a href="#blog" class="btn btn-main">Comment</a>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <div class="blog-sidebar mt-5 mt-lg-0">
                                <div class="bg-gray rounded-bottom">
                                    <img src="images/blog/author.jpg" alt="" class="img-fluid rounded-top w-100" />
                                    <div class="text-center p-4">
                                        <h3 class="mt-4 mb-0">About Me</h3>
                                        <p class="lead">Creative designer & developer</p>
                                        <p>Working as a developer for 3 years. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>

                                <div class="p-5 mt-4">
                                    <h3 class="text-center mb-4">Latest Posts</h3>
                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="#home" class="text-white d-block mb-1">Speed up your website in second</a>
                                            <span class="text-white-50">10 april 2019</span>
                                        </li>
                                        <li class="my-4">
                                            <a href="#home" class="text-white d-block mb-1">Speed up your website in second</a>
                                            <span class="text-white-50">05 april 2019</span>
                                        </li>
                                        <li>
                                            <a href="#home" class="text-white d-block mb-1">Speed up your website in second</a>
                                            <span class="text-white-50">04 april 2019</span>
                                        </li>
                                    </ul>
                                </div>

                                <div class="subscribe bg-gray p-4 mt-4">
                                    <h3 class="text-center mb-4">Subscribe for latest post!</h3>
                                    <input type="text" class="form-control bg-transparent mb-3" placeholder="Put Your Email" />
                                    <div class="text-center">
                                        <a href="#home" class="btn btn-light btn-small">Subscribe</a>
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