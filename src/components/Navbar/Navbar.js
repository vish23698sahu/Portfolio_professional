import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-transprent py-4 fixed-top navigation" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <h2 className="logo">Vishakha.</h2>
          </a>
          <button className="navbar-toggler" type="button" onClick={() => setMobile(!mobile)} data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            {
              mobile ?
                <i class="fa-regular fa-circle-xmark nav__close"></i> :
                <span className="ti-view-list nav__open"></span>
            }
          </button>

          <div className="collapse navbar-collapse text-center" id="navbarsExample09">
            <ul className={mobile ? "nav__mobile" : "navbar-nav mx-auto nav__full"}>
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item"><a class="nav-link smoth-scroll" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link smoth-scroll" href="#skillbar">Expertise</a></li>
              <li className="nav-item"><a className="nav-link smoth-scroll" href="#service">Services</a></li>
              <li className="nav-item"><a className="nav-link smoth-scroll" href="#portfolio">portfolio</a></li>
              <li className="nav-item"><a className="nav-link smoth-scroll" href="#blog">Blog</a></li>
              <li className="nav-item"><a className="nav-link smoth-scroll" href="#contact">Contact</a></li>
            </ul>

            <ul className="list-inline mb-0 ml-lg-4 nav-social">
              <li className="list-inline-item"><a href="https://www.facebook.com/"><i className="ti-facebook"></i></a></li>
              <li className="list-inline-item"><a href="https://twitter.com/?lang=en-in"><i className="ti-twitter"></i></a></li>
              {/* <li className="list-inline-item"><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar