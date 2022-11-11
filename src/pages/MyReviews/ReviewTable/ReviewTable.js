import React from 'react';

const ReviewTable = ({ review, handleDelete }) => {

    // console.log(review);
    const { _id, message, userName, reviewName } = review;


    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{reviewName}</h2>
                    <p>UserName: {userName}</p>
                    <p>Review: {message}</p>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>Delete Item</button>

                </div>
            </div>
        </div>
    );
};

export default ReviewTable;