import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Quizs.css';

const Quizs = ({ques, sl, showhide, showQAns, saveSelectAns}) => {
    const {id, options, question, correctAnswer} = ques;
    const isSow = showhide.find(sid => sid ===id );
    const btnBg = showhide.find(sid => sid ===id );
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
                    {isSow? <FontAwesomeIcon className='fs-6' icon={faEyeSlash}></FontAwesomeIcon> : <FontAwesomeIcon className='fs-6' icon={faEye}></FontAwesomeIcon>}
                </button>
                </div>
            </div>
            <div className='row question ff-firaCode'>
                <div className="col-12 p-3 px-5">
                    <div className="form-check text-start border rounded p-3 fs-6 d-flex option" onClick={()=>saveSelectAns(id,options[0])}>
                        <input className="form-check-input m-0" type="radio" name="flexRadioDefault" id={options[0]}></input>
                        <label className="form-check-label ps-2 ps-2" htmlFor={options[0]}>{options[0]}</label>
                    </div>
                    <div className="form-check text-start border rounded p-3 bg-warning fs-6 d-flex option" onClick={()=>saveSelectAns(id,options[1])}>
                        <input className="form-check-input m-0" type="radio" name="flexRadioDefault" id={options[1]}/>
                        <label className="form-check-label ps-2" htmlFor={options[1]}>{options[1]}</label>
                    </div>
                    <div className="form-check text-start border rounded p-3 bg-warning fs-6 d-flex option" onClick={()=>saveSelectAns(id,options[2])}>
                        <input className="form-check-input m-0" type="radio" name="flexRadioDefault" id={options[2]}/>
                        <label className="form-check-label ps-2" htmlFor={options[2]}>{options[2]}</label>
                    </div>
                    <div className="form-check text-start border rounded p-3 bg-warning fs-6 d-flex option" onClick={()=>saveSelectAns(id,options[3])}>
                        <input className="form-check-input m-0" type="radio" name="flexRadioDefault" id={id}/>
                        <label className="form-check-label ps-2" htmlFor={id}>{options[3] ? options[3] : 'NaN'}</label>
                    </div>
                </div>
            </div>
            <div className={`row ${isSow ? 'currently' : 'd-none'}`}>
            <div className="col-12">
                <p id='show-hide' className='big-blue mx-5 p-3 rounded text-light'><small>Correct Answer:{correctAnswer}</small></p>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Quizs;