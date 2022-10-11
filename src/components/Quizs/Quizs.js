import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Quizs.css';

const Quizs = (props) => {
    const {options, question} = props.question;
    console.log(options);
    return (
        <div className=" d-flex justify-content-center">
            <div className='bg-light rounded-5 border w-75 mb-3'>
            <div className="row">
                <div className="col-11">
                    <h4 className='pt-4 text-start ps-4 fw-normal fs' dangerouslySetInnerHTML={ {__html: question}}>
                    </h4>
                </div>
                <div className="col-1">
                    <FontAwesomeIcon className='pe-4 pt-4 eye' icon={faEye}></FontAwesomeIcon>
                </div>
            </div>
            <div className='row question ff-firaCode'>
                <div className="col-6 p-3 px-5">
                    <button className='btn btn-warning text-start my-2 w-100'>{options[0]}</button>
                    <button className='btn btn-warning text-start my-2 w-100'>{options[2]}</button>
                </div>
                <div className="col-6 p-3 px-5">
                    <button className='btn btn-warning text-start my-2 w-100'>{options[1]}</button>
                    <button className='btn btn-warning text-start my-2 w-100'>{options[3] ?options[3] : 'NaN' }</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Quizs;