import React from 'react';

const Category = ({category}) => {
    const {name, id, job,img} = category ;
    return (
        <div className='category-div'>
             <img src={img} alt="" />
            <h5>{name}</h5>
            <p>{job}</p>
           
        </div>
    );
};

export default Category;