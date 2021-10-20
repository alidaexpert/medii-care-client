import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Doctor.css"
const Doctor = ({doctors}) => {
const {name,proffession,pic}=doctors
const facebookFont=<FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
const twitterFont=<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
const instaFont=<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
const linkedinFont=<FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
    return (
        <div>
        {Array.from({ length: 1 }).map((_, idx) => (
       <Col className="hover-card">
 <Card className="border-0  card-shadow" >
   <Card.Img variant="top"  src={pic} />
   <Card.Body className="text-center ">
     <Card.Title className="text-dark fw-bolder">{name}
     </Card.Title>
     <Card.Text>
     <small className="d-block"> {proffession}</small>

     </Card.Text>
     <Card.Text className="text-secondary hover-card-2">
     {/* <button onClick={handleClick} className="btn btn-info text-white my-3">Book Appoinment</button> */}
     <p className="d-flex justify-content-center gap-4 fs-3 ">
     <a href="https://www.facebook.com/AliSainOfficial" className="text-dark hover-link"><span>{facebookFont}</span></a>
     <a href="https://www.facebook.com/AliSainOfficial" className="text-dark hover-link"><span>{instaFont}</span></a>
     <a href="https://www.facebook.com/AliSainOfficial" className="text-dark hover-link"><span>{twitterFont}</span></a>
     <a href="https://www.facebook.com/AliSainOfficial" className="text-dark hover-link"><span>{linkedinFont}</span></a>
     </p>
     </Card.Text>
   </Card.Body>
 </Card>
 </Col>
  ))}
   </div>
    );
};

export default Doctor;