import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <span className="text-color mb-0 text-uppercase letter-spacing text-sm"> <i className="ti-minus mr-2"></i>Contact</span>
              <h1 className="title">Get in Touch</h1>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">

          <div className="col-lg-8">
            <form className="contact__form form-row contact-form" method="post" action="mail.php" id="contactForm">

              <div className="row">
                <div className="col-12">
                  {/* <div className="alert alert-success contact__msg" style="display: none" role="alert">
                    Your message was sent successfully.
                  </div> */}
                </div>
              </div>

              <div className="form-group col-lg-6 mb-5">
                <input type="text" id="name" name="name" className="form-control bg-transparent" placeholder="Your Name" />
              </div>
              <div className="form-group col-lg-6 mb-5">
                <input type="text" name="email" id="email" className="form-control bg-transparent" placeholder="Your Email" />
              </div>
              <div className="form-group col-lg-12 mb-5">
                <input type="text" name="subject" id="subject" className="form-control bg-transparent" placeholder="Your Subject" />
              </div>
              <div className="form-group col-lg-12 mb-5">
                <textarea id="message" name="message" cols="30" rows="6" className="form-control bg-transparent" placeholder="Your Message"></textarea>

                <div className="text-center">
                  <input className="btn-main text-white btn mt-5" id="submit" name="submit" type="submit" value="Send Message" />
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact;