import React, { useEffect, useState } from 'react';
import './Features.css';
const Featured = ({feature}) => {
  const {title, brand,logo, salary, location,Category,time} = feature;

  
  
  const [detailsData, setDetailsData] = useState([]);
   const [features, setFeatures] = useState([]);
     useEffect(() => {
        fetch('Features.json')
        .then((res) => res.json())
        .then((data) => setFeatures(data))
     }, []);
     const handleViewDetails = () => {
      // Add your logic here to show the details when the button is clicked
      console.log('View details clicked!');
    };
    return (
        <div className='features-div'>
            <img src={logo} alt="" />
          <h4>{title}</h4>
          <div>
          
          </div>
           <h6>{brand}</h6>
           <p></p>
           <div className='d-flex gap-2'>
              <div> <button className='btn btn-outline-info'>{Category}</button></div>
        
               <div><button className='btn btn-outline-info'>{time}</button></div>
           </div>
           <div className='d-flex'>
           <p>{location}</p>
            <p>{salary}</p>
           </div>

           <button className='btn btn-info' onClick={handleViewDetails}>view details</button>
        
           
        </div>
    );

};
export default Featured;