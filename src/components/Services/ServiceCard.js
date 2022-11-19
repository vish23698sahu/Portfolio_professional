import React from 'react'

const ServiceCard = (props) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card p-5 rounded-0">
                <i className={props.iClass}></i>
                <h3 className="my-4 text-capitalize">{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default ServiceCard