import React from 'react';
import img from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='bg-banner h-[600px] bg-no-repeat bg-cover w-full rounded-3xl flex items-center justify-center mt-5'>
           <h1>Discover an exceptional cooking class tailored for you!</h1>
        </div>
    );
};

export default Banner;