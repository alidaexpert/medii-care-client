import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import nurse1 from '../../../images/nurses/nurses01.jpg'
import nurse2 from '../../../images/nurses/nurses02.jpg'
const About = () => {
    const checkFont=<FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
    return (
        <div className="py-5 my-lg-5 ">
            <div  className="container my-lg-5">
            <div className=" row row-cols-lg-2 row-cols-1">
               
                    <div className="col position-relative">
                        <img src={nurse1} className="w-100 rounded-2" alt="" />
                        <img src={nurse2} className="w-50 border border-5 border-info rounded-2 sizes" alt="" />
                    </div>
                    <div className="col pt-sm-5 py-lg-0 mt-5 px-5">
                        <small className="service d-block mt-sm-5 text-center">| About us</small>
                        <h3 className="text-center">Making Health Facilities <br /> In Emergencies</h3>
                        <small className="d-block">We are always preapare to save a life. Our Doctors and Nurses are availble 24 hours. Any Emergency ,You can dial 16999.
                            Our Services are available for u anytime. </small>
                        <ul className="list-unstyled lh-lg py-3 text-secondary">
                            <li><span className="text-primary">{checkFont}</span> Quality Health Care</li>
                            <li><span className="text-primary">{checkFont}</span> Only Quality Doctors</li>
                            <li><span className="text-primary">{checkFont}</span> Medical Research Professionals</li>
                            
                        </ul>

                    </div>
            </div>
        </div>
        </div>
    );
};

export default About;