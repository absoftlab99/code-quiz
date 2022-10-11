import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <hr className='p-0 m-0' />
            <div className="row m-0">
                <div className="col-6 pt-5">
                    <h1 className='display-3 text-start px-5 fw-bolder text-light ff-poppins'>
                        Programming is a <span className='text-warning'><u>Poitry</u></span>
                    </h1>
                    <button className='btn btn-warning mt-5 ms-5 d-flex justify-content-start'>Explore Quizes <FontAwesomeIcon className='fa-bounce ps-2' icon={faArrowDown}></FontAwesomeIcon> </button>
                </div>
                <div className="col-6"></div>
            </div>
        </div>
    );
};

export default Banner;