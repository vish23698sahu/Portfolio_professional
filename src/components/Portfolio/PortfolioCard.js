import React from 'react';

const PortfolioCard = (props) => {
    return (
        <div className="item">
            <div className="portfolio-item position-relative">
                <img src={props.img} className="img-fluid" alt="do it" width='450px' />

                <div className="portoflio-item-overlay">
                    <a href="#"><i className="ti-plus"></i></a>
                </div>
            </div>
            <div className="text mt-3">
                <h4 className="mb-1 text-capitalize">{props.title}</h4>
                <p className="text-uppercase letter-spacing text-sm">{props.text}</p>
            </div>
        </div>
    )
}

export default PortfolioCard