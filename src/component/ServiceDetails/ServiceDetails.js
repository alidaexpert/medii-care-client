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
            <div className="d-flex align-items-center text-white py-lg-5 my-lg-5">
                <Link className="text-white" to="/"><h2>Home</h2></Link> 
                <h2 className="mx-2">/</h2>
                <Link  className="text-white" to="/services"><h2>Services</h2></Link>
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