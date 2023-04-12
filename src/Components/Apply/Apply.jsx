import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../utilities/fakedb';
import LocalApply from '../LocalApply/LocalApply';
 
const Apply = () => {

    const jobData = useLoaderData();
    const [savelocal, setSavelocal] = useState([]);
    useEffect(() => {
        const getLocalDB = getShoppingCart();
         let saveData = [];
         for (const id in getLocalDB){
            const newLocalData = jobData.find((data) => data.id == id);
            if(newLocalData){
                saveData.push(newLocalData);
            }
         }
         setSavelocal(saveData);
    }, [jobData]);
    console.log(savelocal);
    return (
        <div>
          {
            savelocal.map((job) => <LocalApply key={job.id} job={job}> </LocalApply>)
          }
        </div>
    );
};

export default Apply;

//     for (const id in getLocalDB) {
//       const newLocalData = jobData.find((data) => data.id == id);
//       if (newLocalData) {
//         saveData.push(newLocalData);
//       }
//     }
//     setSavelocal(saveData);
//   }, [jobData]);