import { faFacebookMessenger, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Form, Row ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import map from "../../images/map/map.png"

const ContactUs = () => {
    const phoneFont=<FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const inboxFont=<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
    const mapFont=<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
    const facebookFont=<FontAwesomeIcon icon={faFacebookMessenger}></FontAwesomeIcon>
    const twitterFont=<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
    const instaFont=<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
    const linkedinFont=<FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
    return (
        <div>
             {/* common header  */}
             <div className="img-bg p-5">
            <div className="d-flex align-items-center text-white py-lg-5 my-lg-5">
                <Link className="text-white" to="/"><h2>Home</h2></Link> 
                <h2 className="mx-2">/</h2>
                <Link  className="text-white" to="/contact"><h2>Contact Us</h2></Link>
            </div>

        </div>
         {/* start from here  */}
         <div className="container p-5">
             <div className="row row-cols-lg-2 row-cols-1">
                <div className="col">
                <div className="bg-dark rounded-2 my-2 bg-opacity-10 p-5 ">
                     <small className="service my-3 d-block ">| Get It Touch</small>
                     <h4 className="my-3 text-dark">We are always ready to solve your all problem.</h4>
                 <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridName">
      <Form.Control type="text" className="py-3 border-0" placeholder="Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="email" className="py-3 border-0" placeholder="Email" />
    </Form.Group>
  </Row>
  <Row className="mb-2">
  <Form.Group as={Col} controlId="formGridPhone">
      <Form.Control type="phone" className="py-3 border-0" placeholder="Phone" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridSubject">
      <Form.Control type="text" className="py-3 border-0" placeholder="Subject" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" className="py-3  border-0" rows={3} placeholder="Meassage"/>
  </Form.Group>

  <Button variant="info" className="text-white border-0 rounded-0 px-5 py-3" type="submit">
    Send Message
  </Button>
</Form>
                 </div>
                </div>
                 <div className="col">
                 <div className="bg-dark rounded-2 my-2 bg-opacity-10 p-5 ">
                 <small className="service my-3 d-block ">| Get It Touch</small>
                     <h4 className="my-3 text-dark">Talk With Our Expert Doctor</h4>
                     <p className=" text-dark lh-lg">
             <span className="d-block my-4">
                 <span className="m-2 text-info bg-dark rounded-circle p-2">{phoneFont}</span> +1 733 244 1212 </span>
                   <span className="d-block my-4">
                        <span className="m-2 text-info bg-dark rounded-circle p-2">{inboxFont}</span> info@mediicare.com </span>
                   <span className="d-block my-4"> 
                   <span className="m-2 text-info bg-dark rounded-circle p-2 w-75 h-50">{mapFont}</span> 1212 Jonathon Road,London,UK</span>
                   </p>
                   <p className="d-flex justify-content-center mb-0 gap-3 fs-3 text-dark px-0">
                        <a href="https://www.facebook.com/AliSainOfficial" className="text-dark"><span>{facebookFont}</span></a>
                       <a href="https://www.twitter.com/alidaexpert" className="text-dark"> <span>{twitterFont}</span></a>
                        <a href="https://www.instagram.com/alidaexpert" className="text-dark"><span>{instaFont}</span></a>
                        <a href="https://www.linkedin.com/in/alidaexpert" className="text-dark"><span>{linkedinFont}</span></a>
                    </p>
                 </div>
                 </div>

             </div>
            
         </div>
         <img src={map} className="w-100" alt="" />
            
        </div>
    );
};

export default ContactUs;