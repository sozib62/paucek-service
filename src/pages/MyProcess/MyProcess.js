import React from 'react';
import img1 from '../../assets/page-about-icon1-ok.png'
import img2 from '../../assets/page-about-icon2-ok.png'
import img3 from '../../assets/page-about-icon3-ok.png'
import img4 from '../../assets/page-about-icon4-ok.png'

const MyProcess = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-center text-orange-500 font-bold text-4xl'>Friendly & Intuitive System</h1>

            <div className='grid grid-cols-4 mt-16'>
                <div>
                    <img src={img1} alt="" />
                    <h3 className='text-lg mt-6'>Make an online order</h3>
                    <p className='mt-8'>Sit back at home and order <br /> your favorite fastfood on our <br /> site. We will take care the rest.</p>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <h3 className='text-lg mt-6'>Enter your address</h3>
                    <p className='mt-8'>Make sure you enter your <br /> address correctly so our <br /> shipper can find you easily.</p>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <h3 className='text-lg mt-6'>Fast delivery</h3>
                    <p className='mt-8'>After receiving your order, <br /> the food will be served as <br /> fast as possible.</p>
                </div>
                <div>
                    <img src={img4} alt="" />
                    <h3 className='text-lg mt-6'>Pay for the food</h3>
                    <p className='mt-8'>The whole process will <br /> take you only 20 minutes <br /> or less. Just wait and enjoy.</p>
                </div>
            </div>

        </div>
    );
};

export default MyProcess;