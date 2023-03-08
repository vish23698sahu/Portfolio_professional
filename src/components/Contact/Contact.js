import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const onSubmitClickHandler = (e) => {
    setSent(false);
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwfa8SDWR7O-eFHI0bexwhISYhz8Mwydtvpb2a8h7z2njN_I5ICgU9BAv6r4gtX-f97EQ/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          setSent(true);
        })
        .catch(error => console.error('Error!', error.message))
    })
  }

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

            {
              sent &&
              <div className="row center">
                <div className="col-6">
                  <div className="alert alert-success contact__msg" role="alert">
                    Your message was sent successfully.
                  </div>
                </div>
              </div>
            }

            <form className="contact__form form-row contact-form" onSubmit={onSubmitClickHandler} name='submit-to-google-sheet' id="contactForm">

              <div className="form-group col-lg-6 mb-5">
                <input type="text" id="Name" name="Name" className="form-control bg-transparent" placeholder="Your Name" />
              </div>
              <div className="form-group col-lg-6 mb-5">
                <input type="text" name="Email" id="Email" className="form-control bg-transparent" placeholder="Your Email" />
              </div>
              <div className="form-group col-lg-12 mb-5">
                <input type="text" name="Subject" id="Subject" className="form-control bg-transparent" placeholder="Your Subject" />
              </div>
              <div className="form-group col-lg-12 mb-5">
                <textarea id="message" name="Message" cols="30" rows="6" className="form-control bg-transparent" placeholder="Your Message"></textarea>

                <div className="text-center">
                  <input className="btn-main text-white btn mt-5" type='submit' value="Send Note" />
                </div>
              </div>
            </form>
          </div>
        </div>

      </div >
    </section >
  )
}

export default Contact;