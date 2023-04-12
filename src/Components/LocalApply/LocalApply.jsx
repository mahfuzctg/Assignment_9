import React, { useState } from 'react';
import './LocalApply.css'
const LocalApply = ({job}) => {
    
    const {description, name, Experiences, title, id, salary,brand,location,logo,time,Category,Responsibility,Educational_Requirements,email,phone} = job;


   
    return (
             
        <div className='d-flex gap-4 my-4  mx-auto container'>

             
          <div className='d-flex '> <label tabIndex={0} className="btn m-1 w-75 h-25">Filter By Job</label>
            <select   tabIndex={0} className="dropdown-content menu p-1 rounded-2  rounded-box w-25 h-25">
          <option>Part-time</option>
          <option>Remote</option></select>
          </div>
          
            <div className='bg-light d-flex align-items-center p-3 gap-4 mx-auto '>
                
            <div className='apply-logo'>
            <img src={logo} alt="" />
           </div>
           <div className=''>
            <h6>{title}</h6>
            <h6>{brand}</h6>
            
            <div className='d-flex gap-2'>
              <div> <button className=' btn-no-bg '>{Category}</button></div>
        
               <div><button className=' btn-no-bg'>{time}</button></div>
             
           </div>
           <div className='d-flex justify-content-around mt-3'>
           <p>location: {location} </p>
            <p className='mx-2'> $Salary: {salary}</p>
           </div>
           </div>
            
            <div>
                <button className='btn'>View Details</button>
            </div>
            </div>
            
            
        </div>

    );
};

export default LocalApply;