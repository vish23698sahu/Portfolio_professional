import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer border-top-1">
            <div className="container">
                <div className="row align-items-center text-center text-lg-left">
                    <div className="col-lg-2">
                        <h2 className="logo mb-4">Ratsaan.</h2>
                    </div>

                    <div className="col-lg-5">
                        <ul className="list-inline footer-socials ">
                            <li className="list-inline-item"><a href="#"><i className="ti-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="ti-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="ti-pinterest"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="ti-linkedin"></i></a></li>
                            <li className="list-inline-item"><a href="#"><i className="ti-dribbble"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <p className="lead"><span className="text-color">Dreambuzz</span> © 2019 All Right Reserved Ratsaan.</p>
                        <a className="backtop smoth-scroll"><i className="ti-angle-up"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
