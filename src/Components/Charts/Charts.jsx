import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';


const Charts = () => {

    const Marks = [
        {
            "id": "01",
            "name": "Assignment 1",
            "marks": "50"
        },
        {
            "id": "02",
            "name": "Assignment 2",
            "marks": "54"
        },
        {
            "id": "03",
            "name": "Assignment 3",
            "marks": "60"
        },
        {
            "id": "04",
            "name": "Assignment 4",
            "marks": "52"
        },
        {
            "id": "05",
            "name": "Assignment 5",
            "marks": "50"
        },
        {
            "id": "06",
            "name": "Assignment 6",
            "marks": "55"
        },
        {
            "id": "07",
            "name": "Assignment 7",
            "marks": "59"
        },
        {
            "id": "08",
            "name": "Assignment 8",
            "marks": "60"
        }
    ];
    return (
        <div className='container p-5 '>
           
            <ComposedChart
          width={1000}
          height={500}
          data={Marks}
         
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="marks" barSize={10} fill="#413ea0" />
          <Line type="monotone" dataKey="id" stroke="#ff7300" />
        </ComposedChart>
        </div>
    );
};

export default Charts;