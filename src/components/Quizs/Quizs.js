import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Quizs.css';

const Quizs = ({ques, sl, showhide, showQAns, saveSelectAns, selectAns}) => {
    const {id, options, question, correctAnswer} = ques;
    console.log(options);
    const isShow = showhide.find(sid => sid ===id );
    const myans = selectAns.filter(qid => qid.id === id);
    let opt;
    if(myans[0]){
        opt = myans[0].ans;
    }
    return (
        <div className=" d-flex justify-content-center">
        <div className='bg-light rounded-5 border w-75 mb-3'>
            <div className="row">
                <div className="col-10">
                    <h4 className='pt-4 text-start ps-4 fw-normal fs d-flex totka' dangerouslySetInnerHTML={{__html: `<small>Q-${sl+1} ${question}</small>`}}>
                    </h4>
                </div>
                <div className="col-2">
                <button onClick={()=>showQAns(id)} className='rounded border-0 mt-3 pt-0 bg-light'>
                    {isShow? <FontAwesomeIcon className='fs-6' icon={faEyeSlash}></FontAwesomeIcon> : <FontAwesomeIcon className='fs-6' icon={faEye}></FontAwesomeIcon>}
                </button>
                </div>
            </div>
            <div className='row question ff-firaCode'>
                {
                    options.map(option =>
                        <div className="col-12 p-1 px-5">
                            <div className={`form-check text-start border rounded p-3 fs-6 d-flex option  ${opt === option ? 'big-blue text-light' : 'bg-warning'}`} onClick={()=>saveSelectAns(id,option)}>
                                <input className="form-check-input m-0" type="radio" name="flexRadioDefault" id={option}></input>
                                <label className="form-check-label ps-2 ps-2" htmlFor={option}>{option}</label>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={`row ${isShow ? 'currently' : 'd-none'}`}>
            <div className="col-12">
                <p id='show-hide' className='big-blue mx-5 p-3 rounded text-light'>
                    <small className='fs-5'>Correct Answer: {correctAnswer}</small>
                </p>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Quizs;