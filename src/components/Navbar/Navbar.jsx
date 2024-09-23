import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between mt-5'>
            <a className='font-black text-[#640D5F] text-3xl' href="">KitchenKrew.</a>
            <div className='hidden lg:block'>
                <ul className='flex gap-12'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Recipies</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Search</a></li>
                </ul>
            </div>
            <div className='flex items-center gap-3'>
                <input className='bg-yellow-50 px-5 py-3 rounded-[50px] hidden md:block' type="text" placeholder="Search..." />
                <FaRegUserCircle className='w-8 h-8 bg-[#640D5F] text-white rounded-full cursor-pointer' />
            </div>
    
        </div>
    );
};

export default Navbar;