import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notfound.gif';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='p-0 m-0'>
            <div className="">
                <img className='img-fluid' width="550px" height="420px" src={notFound} alt="not found" />
            </div>
            <Link className='btn btn-warning' to="/home"> <FontAwesomeIcon className='fa-shake hand' icon={faHandPointLeft}></FontAwesomeIcon> Go to Home</Link>
        </div>
    );
};

export default NotFound;