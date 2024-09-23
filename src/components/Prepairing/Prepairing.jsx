import React from "react";

const Prepairing = ({ item ,index, handlePrepair }) => {
  const { recipe_name, preparing_time, calories, recipe_id } = item;
  return (
    <>
      
        
        
          <tr>
            <td>{index+1}</td>
            <td>{recipe_name} </td>
            <td>{preparing_time} Minutes</td>
            <td>{calories} calories</td>
            <td><button onClick={() => handlePrepair(recipe_id)} className="btn-fill">prepairing</button></td>
          </tr>
        
      
    </>
  );
};

export default Prepairing;
