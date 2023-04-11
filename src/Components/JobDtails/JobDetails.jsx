import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
   

    const job_Details = useLoaderData()
    let jobId = useParams();
    const [jobData, setJobData] = useState([]);
    useEffect(() => {
        const saveCart =[]
        const jobData = job_Details.find(job => job.id == jobId.id);
        if (jobData){
            saveCart.push(jobData)
            setJobData(saveCart)
        }
    },[])
    console.log(jobData);
    return (
        <div>
            <h2>Job details loading...</h2>
          
        </div>
    );
};

export default JobDetails;