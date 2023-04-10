import React from 'react';
import './Category.css';
const Category = ({category}) => {
    const {name, id, job,img} = category ;
    return (
        <div className='category-div'>
             <img className='my-2' src={img} alt="" />
            <h6>{name}</h6>
            <p>{job}</p>
           
        </div>
    );
};

export default Category;