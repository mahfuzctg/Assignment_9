import React from 'react';

const SingleDetails = ({job}) => {
    const {description, name, Experiences} = job;
    return (
        <div>
             <h5>{Experiences}</h5>
             <p>{description}</p>
        </div>
    );
};

export default SingleDetails;