import React, { useEffect, useState } from 'react';
import './Features.css';
import { Link } from 'react-router-dom';
const Featured = ({feature}) => {
  const {title, brand,logo, salary, location,Category,time} = feature;

   const [features, setFeatures] = useState([]);
     useEffect(() => {
        fetch('Features.json')
        .then((res) => res.json())
        .then((data) => setFeatures(features))
     }, []);
   
    
    return (
        <div className='features-div'>
            <img src={logo} alt="" />
          <h4>{title}</h4>
          <div>
          
          </div>
           <h6>{brand}</h6>
           <p></p>
           <div className='d-flex gap-2'>
              <div> <button className=' btn-no-bg '>{Category}</button></div>
        
               <div><button className=' btn-no-bg'>{time}</button></div>
           </div>
           <div className='d-flex'>
           <p>{location}</p>
            <p>{salary}</p>
           </div>

         <Link to={`/jobDetails/${feature.id}`} >
         
         <button className='btn'>view details</button>
         </Link>
           
        </div>
    );

};
export default Featured;