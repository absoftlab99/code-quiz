import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Subject = ({topic}) => {
    const {id, name, logo, total} = topic;
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 mt-4">
            <Card className='shadow-lg'>
            <Card.Img className='big-blue' variant="top" src={logo}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text><b>Total Quistions:</b> {total}</Card.Text>
                <Link to={`/quiz/${id}`}><Button className='btn big-blue'>Start Quiz</Button></Link>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Subject;