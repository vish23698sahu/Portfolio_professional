import React from 'react'

const Testimonial = () => {
    return (
        <div>
            <section className="section testomionial">
                {/* data-aos="fade-up" */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <span className="text-color mb-0 text-uppercase letter-spacing text-sm"> <i className="ti-minus mr-2"></i>testimonial</span>
                                <h1 className="title">What People Say About me</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="testimonial-slider">
                                <div className="testimonial-item position-relative">
                                    <i className="ti-quote-left text-white-50"></i>
                                    <div className="testimonial-content">
                                        <p className="text-md mt-3">They do this through collaboration between our strategists, designers and technologists.They craft beautiful and unique digital experiences.Unlimited power and customization possibilities.Pixel perfect design & clear code delivered to you.</p>

                                        <div className="media mt-5 align-items-center">
                                            <img src="images/about/2.jpg" alt="" className="img-fluid  rounded-circle align-self-center mr-4" />
                                            <div className="media-body">
                                                <h3 className="mb-0">John Smith</h3>
                                                <span className="text-muted">Creative Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item position-relative">
                                    <i className="ti-quote-left text-white-50"></i>
                                    <div className="testimonial-content">
                                        <p className="text-md mt-3">They do this through collaboration between our strategists, designers and technologists.They craft beautiful and unique digital experiences.Unlimited power and customization possibilities.Pixel perfect design & clear code delivered to you.</p>

                                        <div className="media mt-5 align-items-center">
                                            <img src="images/about/3.jpg" alt="" className="img-fluid  rounded-circle align-self-center mr-4" />
                                            <div className="media-body">
                                                <h3 className="mb-0">Smith Austin</h3>
                                                <span className="text-muted">Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item position-relative">
                                    <i className="ti-quote-left text-white-50"></i>
                                    <div className="testimonial-content">
                                        <p className="text-md mt-3">They do this through collaboration between our strategists, designers and technologists.They craft beautiful and unique digital experiences.Unlimited power and customization possibilities.Pixel perfect design & clear code delivered to you.</p>

                                        <div className="media mt-5 align-items-center">
                                            <img src="images/about/3.jpg" alt="" className="img-fluid  rounded-circle align-self-center mr-4" />
                                            <div className="media-body">
                                                <h3 className="mb-0">Mike jack</h3>
                                                <span className="text-muted">Marketer</span>
                                            </div>
                                        </div>
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

export default Testimonial