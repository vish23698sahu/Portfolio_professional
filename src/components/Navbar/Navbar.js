import React from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-transprent py-4 fixed-top navigation" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <h2 className="logo">Vishakha.</h2>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span className="ti-view-list"></span>
          </button>

          <div className="collapse navbar-collapse text-center" id="navbarsExample09">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item"><a class="nav-link smoth-scroll" href="#about">About</a></li>
              {/* <Link to='/about' className="nav-item" >About</Link> */}
              <li className="nav-item"><a className="nav-link smoth-scroll" href="#skillbar">Expertise</a></li>
              <li className="nav-item"><a className="nav-link smoth-scroll" href="#service">Services</a></li>
              <li className="nav-item"><a class="nav-link smoth-scroll" href="#portfolio">portfolio</a></li>
              <li className="nav-item"><a class="nav-link smoth-scroll" href="#blog">Blog</a></li>
              <li className="nav-item"><a class="nav-link smoth-scroll" href="#contact">Contact</a></li>
            </ul>

            <ul className="list-inline mb-0 ml-lg-4 nav-social">
              <li className="list-inline-item"><a href=""><i className="ti-facebook"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="ti-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="ti-pinterest"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar