import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DisplayDetails from './DisplayDetails/DisplayDetails';

const ShowDetails = () => {

    const services = useLoaderData()

    const { serviceName, img, price, description } = services;

    return (
        <div className='text-center bg-slate-200 rounded-xl'>
            <img className='w-full h-[450px] p-4 rounded-2xl' src={img} alt="" />
            <div className='p-8'>
                <h1 className='text-4xl'>Service Name: {serviceName}</h1>
                <h2 className='text-2xl mt-4'>price: ${price}</h2>
                <p className='mt-4'>{description}</p>
            </div>
            <div className='text-right p-10 ml-5'>
                <Link to='/'><button className="btn btn-active btn-primary">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ShowDetails;