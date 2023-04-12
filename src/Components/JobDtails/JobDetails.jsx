import React, { useEffect, useState } from 'react';
import SingleDetails from '../SingleDetails/SingleDetails';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const job_details = useLoaderData()
    let jobId = useParams()
    const [jobDetails, setJobDetails] = useState([]);
    useEffect(() => {
       
        const jobDetails = job_details.find(job => job.id == jobId.id);
        if (jobDetails){
            setJobDetails([jobDetails]);
            localStorage.setItem('jobDetails', JSON.stringify([jobDetails]));
        }
    },[])

    return (
        <div>
            
           
           {
             jobDetails.map(job => <SingleDetails key={job.id} job={job}></SingleDetails>)
           }
        </div>
    );
};

export default JobDetails;
