import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <hr className='p-0 m-0' />
            <div className="row m-0">
                <div className="col-6 pt-4">
                    <h1 className='display-2 text-start px-5 fw-bolder text-light'>
                        Programming is a <span className='text-warning'><u>Poitry</u></span>
                    </h1>
                    <button className='btn btn-warning mt-5'>Explore Quizes <FontAwesomeIcon className='fa-bounce' icon={faArrowDown}></FontAwesomeIcon> </button>
                </div>
                <div className="col-6"></div>
            </div>
        </div>
    );
};

export default Banner;