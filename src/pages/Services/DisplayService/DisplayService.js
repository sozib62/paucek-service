import React from 'react';

const DisplayService = ({ service }) => {

    const { serviceName, img, description } = service;
    console.log(service);

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{description.slice(0, 100)}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Detalis</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayService;