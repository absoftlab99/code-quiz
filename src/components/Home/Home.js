import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Subject from '../Subject/Subject';

const Home = () => {
    const topics = useLoaderData().data;
        return (
        <div>
            <Banner></Banner>
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

export default Home;