import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-transprent py-4 fixed-top navigation" id="navbar">
        <div className="container">
          <Link to='/' className="navbar-brand"><h2 className="logo">Vishakha.</h2></Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span className="ti-view-list nav__open"></span>
          </button>

          <div className="collapse navbar-collapse text-center" id="navbarsExample09">
            <ul className="navbar-nav mx-auto" >
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item"><Link to='/about' className='nav-link smoth-scroll'>About</Link></li>
              <li className="nav-item"><Link to='/skillbar' className='nav-link smoth-scroll'>Expertise</Link></li>
              <li className="nav-item"><Link to='/services' className='nav-link smoth-scroll'>Services</Link></li>
              <li className="nav-item"><Link to='/portfolio' className='nav-link smoth-scroll'>Portfolio</Link></li>
              <li className="nav-item"><Link to='/blog' className='nav-link smoth-scroll'>Blog</Link></li>
              {/* <li className="nav-item"><a className="nav-link smoth-scroll" href="#skillbar">Expertise</a></li> */}
              <Link to='/contact' className='nav-link smoth-scroll'>Contact</Link>
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