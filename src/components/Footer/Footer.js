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
                            <li className="list-inline-item"><a href="https://www.facebook.com/"><i className="ti-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="https://twitter.com/?lang=en-in"><i className="ti-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/vishakhasahu/"><i className="ti-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <p className="lead"><span className="text-color">DreamBig</span> © 2022 All Right Reserved Vishakha.</p>
                        <a href='#home' className="backtop smoth-scroll"><i className="ti-angle-up"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
