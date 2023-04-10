import React from 'react';

const Features = ({feature}) => {
    const {img, name, title} = feature;
    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
};

export default Features;