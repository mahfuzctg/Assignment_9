import React from 'react';
import './LocalApply.css'
const LocalApply = ({job}) => {
    
    const {description, name, Experiences, title, id, salary,brand,location,logo,time,Category,Responsibility,Educational_Requirements,email,phone} = job;

    return (
        <div>
           <div className='apply-logo'>
            <img src={logo} alt="" />
           </div>
           <div>
            <h6>{title}</h6>
            <h6>{brand}</h6>
           </div>
        </div>
    );
};

export default LocalApply;