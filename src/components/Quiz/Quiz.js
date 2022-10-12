import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizs from '../Quizs/Quizs';
import './Quiz.css';

const Quiz = () => {
    const [selectAns , setSelectAns] = useState([]);
    const [currectAns, setCurrectAns] = useState(0);
    const [wrongAns, setWrongAns] = useState(0);

    const questions = useLoaderData().data.questions;
    const totalQuis = useLoaderData().data.total;
    const topic = useLoaderData().data;
    const [showhide, setShowhide] = useState([]);
    const showQAns = (id)=>{
        const isSow = showhide.find(sid => sid ===id );
        if(isSow){
            const newShow = showhide.filter(sid => sid !== id);
            setShowhide(newShow);
        }else{
            const newShow = [...showhide,id];
            setShowhide(newShow);
        }
    }

    const saveSelectAns = (id,ans) =>{
        const myans = selectAns.find(qid => qid.id === id);
        const getquistions = questions.find(qs => qs.id === id);
        
        if(myans){
            console.log('already added');
            
        }else{
            const newselectAns = [...selectAns,{id : id, ans : ans}];
            setSelectAns(newselectAns)

            if(ans ===getquistions.correctAnswer){
                setCurrectAns(currectAns+1);
                alert('Currect Answer')
            }else{
                setWrongAns(wrongAns+1);
                alert('Wrong Answer')
            }
        }  
    }
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
                                        questions.map((ques, sl) => <Quizs
                                            key={ques.id}
                                            ques={ques}
                                            sl={sl}
                                            showhide={showhide}
                                            showQAns={showQAns}
                                            saveSelectAns={saveSelectAns}
                                            selectAns={selectAns}
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
                        <p className='text-start'><small>Total Quiz: <span>{totalQuis}</span></small></p>
                        <p className='text-start'><small>Correct: <span>{currectAns} <FontAwesomeIcon icon={faCheck} className='text-success ps-2'></FontAwesomeIcon></span></small></p>
                        <p className='text-start'><small>Wrong: <span>{wrongAns} <FontAwesomeIcon icon={faX} className='text-danger ps-2'></FontAwesomeIcon></span></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;