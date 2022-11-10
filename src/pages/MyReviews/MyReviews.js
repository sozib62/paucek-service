import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable/ReviewTable';

const MyReviews = () => {

    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user.email])

    const handleDelete = id => {
        const aa = window.confirm('are you sure delete this item')
        if (aa) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }

    return (
        <div className='grid grid-cols-3'>
            {
                reviews.map(review => <ReviewTable
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                ></ReviewTable>)
            }
        </div>
    );
};

export default MyReviews;