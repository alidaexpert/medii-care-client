import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const phoneFont=<FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
    const inboxFont=<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
    const mapFont=<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
    const logoFont=<FontAwesomeIcon icon={faStethoscope}></FontAwesomeIcon>
    const facebookFont=<FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
    const twitterFont=<FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
    const instaFont=<FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
    const linkedinFont=<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
    return (
        <div className=" bg-img">
           <div className="container text-white p-4">
           <div className=" row">
                <div className="col-lg-3 col-md-6 col-12 col-sm-12">
                    <h3 className="text-danger"><span className="text-white">{logoFont}</span> MediiCare</h3>
                    <p className="text-secondary">
                        <small>
                            We are 24 hour available for you. Our Doctors and Nurse are prepared to any kinds og help. We have professionals Doctor and Nurses. We provide our best services as can as possible.
                        </small>
                    </p>
                    <p className="d-flex gap-3 fs-2">
                        <a href="https://www.facebook.com/AliSainOfficial" className="link-hover"><span>{facebookFont}</span></a>
                       <a href="https://www.twitter.com/alidaexpert" className="link-hover"> <span>{twitterFont}</span></a>
                        <a href="https://www.instagram.com/alidaexpert" className="link-hover"><span>{instaFont}</span></a>
                        <a href="https://www.linkedin.com/in/alidaexpert" className="link-hover"><span>{linkedinFont}</span></a>
                    </p>
                    </div>
                <div className="col-lg-3 col-md-6 col-12 col-sm-12">
                   <h5  className="text-secondary"> Quick Link</h5>
                   <ul className=" list-unstyled lh-lg">
                       <Link className=" text-danger" to="/">
                           <li>Home</li>
                       </Link>
                       <Link className="text-danger" to="/about">
                           <li>About</li>
                       </Link>
                       <Link className="text-danger"  to="/services">
                           <li>Services</li>
                       </Link>
                       <Link className="text-danger" to="/doctors">
                           <li>Doctors</li>
                       </Link>
                       <Link className="text-danger" to="/contact">
                           <li>Contact Us</li>
                       </Link>
                   </ul>
                    </div>
                <div className="col-lg-3 col-md-6 col-12 col-sm-12">
                   <h5 className="text-secondary">Services</h5>
                   <ul className="list-unstyled lh-lg">
                       <li >Dental Surgery</li>
                       <li>Orhopedic Surgery</li>
                       <li>Eye Operation</li>
                       <li>General Surgery</li>
                       <li>Neurology</li>
                   </ul>
                  
                    </div>
                <div className="col-lg-3 col-md-6 col-12 col-sm-12">
                    <h5 className="text-secondary">Information</h5>
                    <ul className="list-unstyled lh-lg">
                    <li><span className="me-2 text-info">{phoneFont}</span> <small> +1 733 244 1212</small></li>
                    <li><span className="me-2 text-info">{inboxFont}</span> <small>info@mediicare.com</small></li>
                    <li><span className="me-2 text-info">{mapFont}</span> <small>1212 Jonathon Road,London,UK</small></li>
                    </ul>
                    </div>


            </div>
            <div className=" border-top text-center pt-3">
<small>&copy; Copyright 2021 | All Right Reserved</small>
            </div>
           </div>
        </div>
    );
};

export default Footer;