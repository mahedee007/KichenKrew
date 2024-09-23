import React, { useEffect, useState } from 'react';
import Recipie from '../Recipie/Recipie';

const Recipies = ({handleCook}) => {
    const [recipies, setRecipies] = useState([]);

    useEffect(()=>{
        fetch('fakedata.json')
       .then(res=>res.json())
       .then(data=>setRecipies(data))
    },[])

    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-9'>
            {
                recipies.map((recipie, idx) => <Recipie key={idx} recipie ={recipie} handleCook ={handleCook}
                ></Recipie>)
            }
        </div>
    );
};

export default Recipies;