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
             <div>
             {/* common header  */}
             <div className="img-bg p-5">
            <div className=" align-items-center text-white">
                <h1 className="m-0">About</h1>
               <div>
               <Link className="text-white text-opacity-75" to="/"><small>Home</small></Link> 
                <small className="mx-2">/</small>
                <Link  className="text-danger" to="/about"><small>About</small></Link>
               </div>
            </div>

        </div>
         {/* start from here  */}
        <div className="py-5 bg-primary bg-opacity-10">
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