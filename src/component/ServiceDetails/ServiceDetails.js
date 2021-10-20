import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import "./ServiceDetails.css"
const ServiceDetails = () => {
    const {serviceId}=useParams()
    const {services}=useServices()
    const [details,setDetails]=useState({})
    useEffect(()=>{
   const addStored=services.find(service=>service.id===parseInt(serviceId))
   setDetails(addStored)
    },[services])
    return (
    <div className="bg-info bg-opacity-25 ">
               {/* common header  */}
               <div className="img-bg p-5">
            <div className=" align-items-center text-white">
                <h1 className="m-0">Service Details</h1>
               <div>
               <Link className="text-white text-opacity-75" to="/"><small>Home</small></Link> 
                <small className="mx-2">/</small>
                <Link  className="text-danger" to="/services"><small>Services</small></Link>
               </div>
            </div>

        </div>
         {/* start from here  */}
        <div className="container bg-opacity-10 bg-white py-5">
           <div className="row row-cols-lg-2 row-cols-1 g-4">
               <div className="col d-flex align-items-center">
<img className="w-100 rounded-2" src={details?.thumb} alt="" />
               </div>
               <div className="col bg-opacity-50 bg-white p-5">
<h2>{details?.service}</h2>
<p>
<small>{details?.description}</small>
</p>
<button className="btn btn-info text-white">Book Appoinment</button>
               </div>
           </div>
         
        </div>
        </div>
    );
};

export default ServiceDetails;