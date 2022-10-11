import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subject from '../Subject/Subject';

const Topics = () => {
        const topics = useLoaderData().data;
        return (
        <div className='pt-5'>
            <div className="container mt-5">
                <h1 className='fw-bolder'>Quiz Topics</h1>
                <div className="row">
                {
                    topics.map( topic => <Subject
                    key={topic.id}
                    topic={topic}
                    ></Subject>)
                }
            </div>
            </div>
        </div>
    );
};

export default Topics;