import React from 'react';


const Banner = () => {
    return (
        <div className='bg-banner   h-[600px] bg-no-repeat  bg-cover w-full mx-auto rounded-3xl flex flex-col items-center  justify-center mt-5'>
           
           <h1>Discover an exceptional cooking class tailored for you!</h1>
           <h6>Discover delicious recipes, cooking tips, and kitchen inspiration. Join our community of food enthusiasts and share your culinary creations.</h6>
           
           <div className='flex flex-col lg:flex-row items-center gap-3 mt-2 md:mt-4 '>
           <button className='btn-fill'>Explore Now</button> 
           <button className='btn-otline'>Our Feedback</button>
           </div>
           
        </div>
    );
};

export default Banner;