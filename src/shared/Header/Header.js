import React from 'react';
import Navbar from './Navbar/Navbar';
import img from '../../assets/banner00.jpeg'


const Header = () => {
    return (
        <div className='mx-20'>

            <div>
                <img className='w-full' src={img} alt="" />
            </div>

        </div>
    );
};

export default Header;