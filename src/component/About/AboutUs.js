import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import nurse1 from '../../images/nurses/nurses01.jpg'
import nurse2 from '../../images/nurses/nurses02.jpg'
import "./AboutUs.css"
const AboutUs = () => {
    const checkFont=<FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
    return (
        <div className="">
            {/* common header  */}
                    <div className="img-bg p-5">
            <div className="d-flex align-items-center text-white py-lg-5 my-lg-5">
                <Link className="text-white" to="/"><h2>Home</h2></Link> 
                <h2 className="mx-2">/</h2>
                <Link  className="text-white" to="/about"><h2>About</h2></Link>
            </div>

        </div>
         {/* start from here  */}
        <div className="py-5 my-lg-5">
            <div  className="container my-lg-5">
            <div className=" row row-cols-lg-2 row-cols-1">
               
                    <div className="col position-relative mb-sm-5">
                        <img src={nurse1} className="w-100 rounded-2" alt="" />
                        <img src={nurse2} className="w-50 border border-5 border-info rounded-2 sizes" alt="" />
                    </div>
                    <div className="col pt-sm-5 py-lg-0 mt-sm-5 mt-3">
                        <small className="service ">| About us</small>
                        <h3>Making Health Facilities In Emergencies</h3>
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
        </div>
    );
};

export default AboutUs;