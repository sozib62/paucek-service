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

    return (
        <div className=''>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr className='grid grid-cols-3 w-full'>
                            <th>Name</th>
                            <th>Review Message</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        {
                            reviews.map(review => <ReviewTable
                                key={review._id}
                                review={review}
                            ></ReviewTable>)
                        }
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default MyReviews;