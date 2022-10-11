import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="row">
                <div className="col-6">
                    <h1 className='display-2 text-start p-5 fw-bolder text-light'>
                        Programming is a <span className='text-warning'>Poitry</span>
                    </h1>
                    <button className='btn btn-warning'>Explore Quizes</button>
                </div>
                <div className="col-6"></div>
            </div>
        </div>
    );
};

export default Banner;