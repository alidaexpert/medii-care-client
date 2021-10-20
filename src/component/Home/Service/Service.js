import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "./Service.css"
const Service = ({services}) => {
    const {id,service,thumb,description}=services
    const history=useHistory()
    const handleClick=()=>{
history.push(`/services/${id}`)
    }
    return (
        <div>
             {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
      <Card className="border-0 card-shadow">
        <Card.Img variant="top" src={thumb} />
        <Card.Body className="text-center">
          <Card.Title className="text-dark fw-bolder">{service}</Card.Title>
          <Card.Text className="text-secondary">
          <small className="d-block"> {description.slice(0,160)}...</small>
          <button onClick={handleClick} className="btn btn-info text-white my-3">Book Appoinment</button>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
       ))}
        </div>
    );
};

export default Service;