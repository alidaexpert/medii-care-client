import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useServices from '../../../hooks/useServices';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const {doctors}=useServices()
    const arrowFont=<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
    const history=useHistory()
    const handleClick=()=>{
        history.push("/doctors")
    }

    return (
        <div className="bg-info bg-opacity-10 py-5">
        <div className="container my-5 text-center">
           <small className="service">| Medical Doctors</small>
            <h3 className="px-5 py-2 mb-5">They are always preapre to save a life <br /> from their dedication,strugle and service.</h3>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                doctors.map(doctor=><Doctor key={doctor.id} doctors={doctor}></Doctor>).slice(0,3)
            }
           
            </Row>
            <button onClick={handleClick} className="btn btn-danger rounded-circle mt-5">{arrowFont}</button>
        </div>
        </div>
    );
};

export default Doctors;
