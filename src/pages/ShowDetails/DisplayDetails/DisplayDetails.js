import React from 'react';

const DisplayDetails = ({ service }) => {

    const { serviceName, img, price, description } = service;

    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default DisplayDetails;