
import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import DoctorDetail from '../DoctorDetail/DoctorDetail';
const DoctorDetails = () => {
    const {doctors}=useServices()
    return (
        <div>
             {/* common header  */}
             <div className="img-bg p-5">
            <div className="d-flex align-items-center text-white py-lg-5 my-lg-5">
                <Link className="text-white" to="/"><h2>Home</h2></Link> 
                <h2 className="mx-2">/</h2>
                <Link  className="text-white" to="/doctors"><h2>Doctors</h2></Link>
            </div>

        </div>
         {/* start from here  */}
        <div className="py-5">
        <div className="container my-5 text-center">
           <small className="service">| Medical Doctors</small>
            <h3 className="px-5 py-2 mb-5">They are always preapre to save a life <br /> from their dedication,strugle and service.</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                doctors.map(doctor=><DoctorDetail key={doctor.id} doctors={doctor}></DoctorDetail>)
            }
           
            </Row>
            

        </div>
        
        </div>
        </div>
    );
};

export default DoctorDetails;
