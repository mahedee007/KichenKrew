import React from 'react';
import { FaRegClock, FaBurn } from "react-icons/fa";

const Recipie = ({recipie, handleCook}) => {
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipie;
    return (
        <div className='w-[379px] flex flex-col gap-6 p-6'>
            <img src={recipe_image} alt=""  className='w-[331px] rounded-2xl'/>
            <h2 className='text-2xl font-semibold'>{recipe_name}</h2>
            <p>{short_description}</p>
            <p>Ingredients: {ingredients.length}</p>
            <ul className='list-disc pl-8'>
               {
                 ingredients.map((ingredient, index) => <li  key={index}>{ingredient}</li>)
               }
            </ul>
            <hr />
           <div className='flex items-center gap-10'>
            <p className='flex items-center gap-2'><FaRegClock/> <span>{preparing_time}</span> Minutes</p>
            <p className='flex items-center gap-2'><FaBurn/> <span>{calories}</span> Calories</p>
           </div>
           <button onClick={() =>handleCook(recipie)} className='btn-fill'>Want to Cook</button>
            
        </div>
    );
};

export default Recipie;