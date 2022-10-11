import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Subject = ({topic}) => {
    const {name, logo, total} = topic;
    return (
        <div className="col-3 mt-4">
            <Card className='shadow-lg'>
            <Card.Img className='big-blue' variant="top" src={logo}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Total Quistions: {total}</Card.Text>
                <Button className='btn big-blue'>Start Quiz</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Subject;