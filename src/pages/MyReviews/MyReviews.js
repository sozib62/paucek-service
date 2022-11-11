import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable/ReviewTable';

const MyReviews = () => {

    const { user, logOut } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])

    console.log();

    useEffect(() => {
        fetch(`https://assignment-11-server-site-nine.vercel.app/reviews?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => setReviews(data))
    }, [user.email])

    const handleDelete = id => {
        const agree = window.confirm('are you sure delete this item')

        if (agree) {
            fetch(`https://assignment-11-server-site-nine.vercel.app/reviews/${id}`, {
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