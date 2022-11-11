import React from 'react';
import { Link } from 'react-router-dom';

const ReviewTable = ({ review, handleDelete }) => {

    // console.log(review);
    const { _id, message, userName, reviewName } = review;


    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl">{reviewName}</h2>
                    <p className='text-2xl'>UserName: {userName}</p>
                    <p className='text-2xl'>Review: {message}</p>
                    <button onClick={() => handleDelete(_id)} className='btn btn-primary'>Delete Item</button>
                    <Link to={`/update/${_id}`}><button className='btn btn-primary'>Edit</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ReviewTable;