import React from 'react';
import Prepairing from '../Prepairing/Prepairing';


const Sidebar = ({recipie, handlePrepair}) => {
    return (
        <div className='mt-9  w-[331px] text-center'>
            <h2>Want to Cook: <span>{recipie.length}</span></h2>
            <table  className="table-fixed text-center">
        <thead>
          <tr className='px-5'>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {recipie.map((item, index) => (
            <Prepairing key={index} index={index} item={item} handlePrepair={handlePrepair} />
          ))}
        </tbody>
      </table>
            
        </div>
    );
};

export default Sidebar;