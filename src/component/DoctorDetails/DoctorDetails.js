
import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Doctor from '../Home/Doctor/Doctor';
const DoctorDetails = () => {
    const {doctors}=useServices()
    return (
        <div>
             {/* common header  */}
             <div className="img-bg p-5">
            <div className=" align-items-center text-white">
                <h1 className="m-0">Doctors</h1>
               <div>
               <Link className="text-white text-opacity-75" to="/"><small>Home</small></Link> 
                <small className="mx-2">/</small>
                <Link  className="text-danger" to="/doctors"><small>Doctors</small></Link>
               </div>
            </div>

        </div>
         {/* start from here  */}
        <div className="py-lg-5">
        <div className="container my-5 text-center">
           <small className="service">| Medical Doctors</small>
            <h3 className="px-5 py-2 mb-5">They are always preapre to save a life <br /> from their dedication and strugle.</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                doctors.map(doctor=><Doctor key={doctor.id} doctors={doctor}></Doctor>)
            }
           
            </Row>
            

        </div>
        
        </div>
        </div>
    );
};

export default DoctorDetails;
