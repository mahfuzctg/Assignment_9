import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import './Home.css';
import Category from '../Category/Category';

const Home = () => {
    const categorys = useLoaderData();

    return (
        <div className='container '>
            {/* here is home container section*/}
            <div className='home-container d-flex py-3'>
            <div className='home-tile'>
            <h1>One Step <br /> Closer To Your <br /> <span className='span'> Dream Job</span></h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className='btn btn-primary'>Get Started</button>
           </div>
           <div>
            <img className='img' src="https://i.postimg.cc/Jzw9fyY5/Whats-App-Image-2022-02-12-at-11-39-52-PM.jpg" alt="" />
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
        </div>

        
    );
};

export default Home;