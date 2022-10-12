import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const total = useLoaderData().data;    
    const data = [
        {name: 'Quiz-1', Questions: `${total[0].total}`},
        {name: 'Quiz-2', Questions: `${total[1].total}`},
        {name: 'Quiz-3', Questions: `${total[2].total}`},
        {name: 'Quiz-4', Questions: `${total[3].total}`}
    ];
    return (
        <div className="container">
            <div className='row chart'>
            <div className="col-12 d-flex justify-content-center flex-column">
                <h1 className='fw-bolder text-center'>Quiz Statistics</h1>
                <div className='mt-3 w-100  d-flex justify-content-center'>
                <BarChart style={{backgroundColor: 'skyblue'}} width={390} height={450} data={data}>
                    <XAxis dataKey="name" stroke="#0056D2" />
                    <YAxis />
                    <Tooltip />
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                    <CartesianGrid stroke="#0056d2" strokeDasharray="4 4" />
                    <Bar dataKey="Questions" fill="#0056D2" barSize={30} />
                </BarChart>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Statistics;