import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayAllService from './DisplayAllService/DisplayAllService';

const ShowAllService = () => {

    const services = useLoaderData();

    return (
        <div className='grid grid-cols-3 gap-12'>
            {
                services.map(service => <DisplayAllService
                    key={service._id}
                    service={service}
                ></DisplayAllService>)
            }
        </div>
    );
};

export default ShowAllService;