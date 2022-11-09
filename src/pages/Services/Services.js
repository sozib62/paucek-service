import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayService from './DisplayService/DisplayService';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className=' mt-40'>
            <h1 className='text-5xl text-center font-bold text-amber-600'>MY SERVICES</h1>

            <div className='grid grid-cols-3 mt-5'>
                {
                    services.map(service => <DisplayService
                        key={service._id}
                        service={service}
                    ></DisplayService>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to='/services'><button className="btn btn-active btn-primary ">Show More</button></Link>
            </div>

        </div>
    );
};

export default Services;