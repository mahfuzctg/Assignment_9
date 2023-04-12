import React from 'react';
import "./SingleDetails.css";
const SingleDetails = ({job}) => {
    const {description, name, Experiences, title, id, salary,brand,location,logo,time,Category,Responsibility,Educational_Requirements,email,phone} = job;
    return (
        <div className='container grid row-cols-2 d-flex gap-4 my-5'>


            {/* here is job description */}
            <div className='grid col-8 bg-light p-2 py-5 rounded-2'>
            <h6>Job Description: <span>{description}</span></h6>
            <br />
            <h6>Job Responsibility: <span>{Responsibility}</span></h6>
            <br />
            <h6>Educational Requirements: <span>{Educational_Requirements}</span></h6>
            <br />
            <h6>Experiences: <span>{Experiences}</span></h6>
            </div>




            {/* here is job details */}
            <div className='grid col-4 bg-light p-1 rounded-2'>
               
                <h6 className='text-center pt-1'> Job details</h6>
                <hr />
                <h6>Salary: <span>{salary}</span></h6>
                <h6>Job Title: <span>{title}</span></h6>
                  <br />
                <h6>Contact Information</h6>
                <hr />
                <h6>Phone: <span>{phone}</span></h6>
                 <h6>Email: <span>{email}</span></h6>
                 <h6>Address: <span>{location}</span></h6>
                 <br />
                
                 <div className='apply-btn'>
                <button className='btn'>Apply Now</button>
                </div>
            </div>
        
        </div>
    );
};

export default SingleDetails;