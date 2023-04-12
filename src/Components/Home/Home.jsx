import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import './Home.css';
import Category from '../Category/Category';
import Features from '../Features/Features';


const Home = () => {

    const categorys = useLoaderData();

    
    const [features, setFeatures] = useState([]);
    const [seeMore, setSeeMore] = useState(false);
    useEffect(() => {
       fetch('Features.json')
       .then((res) => res.json())
       .then((data) => setFeatures(data))
    }, []);
    
    const handleSeeMore = () => {
        setSeeMore(true);
    };

   
    const showAllFeatures =seeMore ? features : features.slice(0,4)

   
    
    return (
        <div>
            {/* here is home container section*/}
            <div className='home-container d-flex py-3'>
            <div className='home-tile'>
            <h1>One Step <br /> Closer To Your <br /> <span className='span'> Dream Job</span></h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className='btn'>Get Started</button>
           </div>
           <div>
            <img className='img' src="https://i.postimg.cc/Hsf5Fw0W/Whats-App-Image-2023-04-11-at-6-50-08-AM.jpg" alt="" />
           </div>
            </div>
             

             {/* here is category section */}
            <div className='category text-center pt-5'>
                <h4>Job Category List</h4>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
                 
            <div className='category-home'>
                {
                          categorys.map(category => <Category 
                          key={category.id}
                          category={category}
                          ></Category>)
                }
            </div>

            {/* here is features section */}
                <div className='features-home my-5'>
               
                {
                    showAllFeatures.map((feature) => (
                        <Features  
                        key={feature.id}
                        feature={feature}
                        handleSeeMore={() => handleSeeMore(feature.id)}
                        ></Features>
                    ))
                }
                
                <div className='see-more'>
                {
                    !seeMore && (
                        <button className='btn' onClick={handleSeeMore}>See More</button>
                    )
                }
                   
                </div>
                </div>
               

             
        </div>

        
    );
};

export default Home;