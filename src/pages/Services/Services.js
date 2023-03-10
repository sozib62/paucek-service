import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayService from './DisplayService/DisplayService';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-site-nine.vercel.app/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className=' mt-40'>
            <h1 className='text-5xl text-center font-bold text-amber-600'>MY SERVICES</h1>

            <div className='grid grid-cols-3 gap-10 mt-5 '>
                {
                    services.map(service => <DisplayService
                        key={service._id}
                        service={service}
                    ></DisplayService>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to='/services'><button className="btn btn-active btn-primary px-16 py-4">SEE ALL</button></Link>
            </div>

        </div>
    );
};

export default Services;