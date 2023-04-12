import React, { useEffect, useState } from 'react';
import SingleDetails from '../SingleDetails/SingleDetails';
import {addToDb} from '../utilities/fakedb'
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const job_details = useLoaderData()
    let jobId = useParams()
    const [jobDetails, setJobDetails] = useState([]);
    useEffect(() => {
        const saveCart = [];
        const jobDetails = job_details.find(job => job.id == jobId.id);
        if (jobDetails){
           saveCart.push(jobDetails)
          setJobDetails(saveCart)     
        
        }
    },[]);

    // const handleApplyJob = (job) => {
    //   let newCart = [] ;
    //   const applied = jobDetails.find(jobs => jobs.id == job.id);
    //   if(!applied){
    //      singleJob.quantity = 1 ;
    //      newCart =  [...jobDetails,job]
    //   }
    //   else{
    //     applied.quantity =applied.quantity + 1;
    //     const remaining = job_details.filter((jobs) => jobs.id !== job.id);
    //     newCart = [...remaining, applied] ;
    //     Toast.success("Added this item successfully!",{
    //       position: Toast.POSITION.TOP_CENTER,
    //     })
    //   }
    // }
   
    return (
        <div>
            
           
           {
             jobDetails.map((job) => <SingleDetails 
              key={job.id} 
              job={job} 
             
             
             ></SingleDetails>)
           }
        </div>
    );
};

export default JobDetails;
