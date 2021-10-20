import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUpComplete = () => {
    const {user}=useAuth()
    return (
        <div className=" container text-center p-5">
            <h1 className="text-info">Congratulations!</h1>
            <p><span className="text-danger fw-bolder">{user.email}</span> this email hase been created successfully.</p>
<p>Now you have to remember your password.If you forget your password,<br /> don't worry, you can easily recover it.</p>
<p>Click here to
   <Link className="text-decoration-none text-white" to="/update_profile"> <button className="btn btn-info text-white">Update your Profile</button></Link>
     </p>
        </div>
    );
};

export default SignUpComplete;