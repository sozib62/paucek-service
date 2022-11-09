import React from 'react';
import img from '../../assets/section.png'

const MyDestination = () => {
    return (
        <div className='mt-20 p-5 bg-gray-100 shadow-xl'>
            <div className='text-center'>
                <h1 className='text-5xl font-semibold text-orange-500'>My Destination</h1>
                <p className='text-xl mt-4'>My strong values connect and drive us forward every day. A mission to deliver anything.</p>
            </div>
            <div className='mt-10 grid grid-cols-2'>
                <div>
                    <img className='w-full rounded-xl' src={img} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl text-center text-orange-500 font-bold'>My Goal</h1>
                    <p className='p-6 text-xl'>Safe fast food delivery web on a smartphone tracking the delivery man on a moped, technology and logistics concept, city skyline in the background.Valid driver’s license and clean driving record
                        Ability to lift and carry heavy food orders and operate a vehicle for prolonged periods of time
                        Strong interpersonal skills, including verbal communication and conflict resolution
                        Mindset for organization and attention to details.
                        Previous delivery or customer service experience in any industry
                        Proven track record of succeeding in time-sensitive situations
                        Previous delivery or customer service experience in any industry
                        Proven track record of succeeding in time-sensitive situations
                        Experience in handling cash and giving change
                        Familiarity with the local area, including streets, highways, and buildings.</p>
                </div>
            </div>
        </div>
    );
};

export default MyDestination;