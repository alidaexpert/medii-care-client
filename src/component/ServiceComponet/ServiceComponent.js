import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Service from '../Home/Service/Service';

const ServiceComponent = () => {
  const {services}=useServices()
    return (
        <div>
                      {/* common header  */}
                      <div className="img-bg p-5">
            <div className=" align-items-center text-white">
                <h1 className="m-0">Services</h1>
               <div>
               <Link className="text-white text-opacity-75" to="/"><small>Home</small></Link> 
                <small className="mx-2">/</small>
                <Link  className="text-danger" to="/services"><small>Services</small></Link>
               </div>
            </div>

        </div>
         {/* start from here  */}
        <div className="container my-5 text-center">
           <small className="service">| Medical Services</small>
            <h3 className="px-5 py-2 mb-5">Preparing for your wellness, we provide <br /> trule prominent health care.</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                services.map(service=><Service key={service.id} services={service}></Service>)
            }
           
            </Row>
        </div>
        </div>
    );
};

export default ServiceComponent;