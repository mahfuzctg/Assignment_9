import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <nav className=' py-4 d-flex justify-content-around align-items-center'>
            <div className='header-logo'>
                <h5>FindJobs</h5>
            </div>
           <div className='header-link'>
           <Link to='/'>Home</Link>
           <Link to='/statistic'>Statistics</Link>
            <Link to="/applied">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
           </div>
           <div>
            <button className='btn btn-primary'>Start Applying</button>
           </div>
        </nav>
    );
};

export default Header;