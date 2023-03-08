import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer border-top-1">
            <div className="container">
                <div className="row align-items-center text-center text-lg-left">
                    <div className="col-lg-2">
                        <h2 className="logo mb-4">_Vishakha</h2>
                    </div>

                    <div className="col-lg-5">
                        <ul className="list-inline footer-socials ">
                            <li className="list-inline-item"> <a href="https://github.com/vish23698sahu" target='_blank' rel="noreferrer" ><i className='fa fa-github' ></i> </a></li>
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/vishakhasahu/" target='_blank' rel="noreferrer"><i className="ti-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <p className="lead"><span className="text-color">DreamBig</span> © 2023 All Right Reserved Vishakha.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
