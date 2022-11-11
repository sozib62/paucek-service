import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ShowDetails = () => {

    const { user } = useContext(AuthContext);
    const services = useLoaderData()
    const { _id, serviceName, img, price, description } = services;

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const review = {
            reviewId: _id,
            email,
            reviewName: serviceName,
            userName: name,
            message,
        }

        fetch('https://assignment-11-server-site-nine.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Added Successfully')
                    form.reset();
                }
            })
            .catch(err => console.log(err))

    }

    return (
        <div className='grid grid-cols-2 text-center bg-slate-200 rounded-xl'>
            <div className='mt-16'>
                {
                    user && user.email ?
                        <form onSubmit={handleSubmit} className='flex flex-col'>
                            <h2 className='text-3xl text-blue-600 font-semibold'> Please Enter Your Review </h2>
                            <div>
                                <input name='name' type="text" placeholder="Enter Your Name" className="input mt-5 input-bordered input-info w-3/4" />
                                <input name='email' type="email" defaultValue={user.email} className="input mt-5 input-bordered input-info w-3/4" readOnly />
                                <textarea name='message' className="textarea textarea-info mt-5 w-3/4" placeholder="Enter Your Review"></textarea>
                            </div>
                            <div>
                                <button type='submit' className="btn btn-active btn-primary">Submit review</button>
                            </div>
                        </form>
                        :
                        <h1 className='text-3xl text-red-600 font-semibold'>Please Go To <Link to='/login'>Login</Link></h1>
                }
            </div>
            <div>
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
        </div>
    );
};

export default ShowDetails;