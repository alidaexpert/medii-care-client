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
         <div className="d-flex align-items-center text-white py-lg-5 my-lg-5">
             <Link className="text-white" to="/"><h2>Home</h2></Link> 
             <h2 className="mx-2">/</h2>
             <Link  className="text-white" to="/services"><h2>Services</h2></Link>
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