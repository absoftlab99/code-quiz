import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Subject from '../Subject/Subject';

const Home = () => {
    const topics = useLoaderData();
    console.log(topics);
    return (
        <div>
            <Banner></Banner>
            <Subject></Subject>
        </div>
    );
};

export default Home;