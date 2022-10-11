import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizs from '../Quizs/Quizs';
import './Quiz.css';

const Quiz = () => {
    const questions = useLoaderData().data.questions;
    const topic = useLoaderData().data;
    console.log(questions);
    return (
        <div className='mt-5 pt-5'>
            <div className="row">
                <div className="col-10">
                    <h1>Quiz Topic: <span>{topic.name}</span></h1>
                    <div className="row pt-4 m-0">
                        <div className="">
                            <h3 className='text-center'>
                                <div className="container">
                                    {
                                        questions.map((question, sl) => <Quizs
                                            key={question.id}
                                            question={question}
                                            sl={sl}
                                        ></Quizs>)
                                    }
                                </div>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-2 position-relative text-light fw-bolder mt-5">
                    <div className="big-blue pt-3 p-5 position-fixed end-0">
                        <h5 className=''>Quiz Summary</h5>
                        <hr className=''/>
                        <p className='text-start'><small>Total Quiz: <span>00</span></small></p>
                        <p className='text-start'><small>Correct: <span>00 <FontAwesomeIcon icon={faCheck} className='text-success ps-2'></FontAwesomeIcon></span></small></p>
                        <p className='text-start'><small>Wrong: <span>00 <FontAwesomeIcon icon={faX} className='text-danger ps-2'></FontAwesomeIcon></span></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;