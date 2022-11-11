import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const DisplayService = ({ service }) => {

    const { serviceName, img, price, description, _id } = service;
    // console.log(service);

    return (
        <div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img className='[w-200px] h-[320px]' src={img} alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <h2 className='text-2xl'> Price: ${price}</h2>
                    <p>{description.slice(0, 100)}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayService;