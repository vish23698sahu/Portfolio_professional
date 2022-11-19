import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <h1>Hello</h1>
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

              <div class="form-group col-lg-6 mb-5">
                <input type="text" id="name" name="name" class="form-control bg-transparent" placeholder="Your Name" />
              </div>
              <div class="form-group col-lg-6 mb-5">
                <input type="text" name="email" id="email" class="form-control bg-transparent" placeholder="Your Email" />
              </div>
              <div class="form-group col-lg-12 mb-5">
                <input type="text" name="subject" id="subject" class="form-control bg-transparent" placeholder="Your Subject" />
              </div>
              <div class="form-group col-lg-12 mb-5">
                <textarea id="message" name="message" cols="30" rows="6" class="form-control bg-transparent" placeholder="Your Message"></textarea>

                <div class="text-center">
                  <input class="btn btn-main text-white mt-5" id="submit" name="submit" type="submit" className="btn btn-hero" value="Send Message" />
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