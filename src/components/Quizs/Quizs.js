import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Quizs.css';

const Quizs = (props) => {
    const {options, question} = props.question;
    return (
        <div className=" d-flex justify-content-center">
            <div className='bg-light rounded-5 border w-75 mb-3'>
            <div className="row">
                <div className="col-11">
                    <h4 className='pt-4 text-start ps-4 fw-normal fs d-flex totka' dangerouslySetInnerHTML={{__html: `<small>Q-${props.sl+1} ${question}</small>`}}>
                    </h4>
                </div>
                <div className="col-1">
                    <FontAwesomeIcon className='pe-4 pt-4 eye' icon={faEye}></FontAwesomeIcon>
                </div>
            </div>
            <div className='row question ff-firaCode'>
                <div className="col-12 p-3 px-5">
                    <div className="form-check text-start border rounded p-3 bg-warning fs-6 p-0">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">{options[0]}</label>
                    </div>
                    <div className="form-check text-start border rounded p-3 bg-warning fs-6">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">{options[1]}</label>
                    </div>
                    <div className="form-check text-start border rounded p-3 bg-warning fs-6">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">{options[2]}</label>
                    </div>
                    <div className="form-check text-start border rounded p-3 bg-warning fs-6">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">{options[3] ? options[3] : 'NaN'}</label>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Quizs;