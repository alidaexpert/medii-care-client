import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css"
const NotFound = () => {
    return (
        <div className="bg-404 d-flex align-items-end justify-content-center w-100 py-5 text-center">

<Link to="/"> <button className="btn btn-info text-white">Go Home</button> </Link>
        </div>
    );
};

export default NotFound;