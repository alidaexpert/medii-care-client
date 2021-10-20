import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import "./Register.css"
const Register = () => {
    const{error,signInGoogle,signUpEmail,inputEmail,inputPassword}=useAuth()
    const googleFont=<FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
    const history=useHistory()
    const redirect_url= "/"
    const signInUrl= "/sign_in"
    const signIn=()=>{
        signInGoogle()
        .then(()=>{
history.push(redirect_url)
        })
    }
    const signUp=()=>{
        signUpEmail()
        .then(()=>{
history.push(signInUrl)
        })
    }

    return (
        <div>
           <div className="container  register-bg d-flex justify-content-center my-5 ">
             <div className=" my-5">
             <h2 className="mb-3">Register Page</h2>
               <div>
               <Form>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label >Email address</Form.Label>
    <Form.Control onBlur={inputEmail} type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={inputPassword} type="password" placeholder="Password" />
  </Form.Group>
</Form>
<span className="d-block text-danger p-1">{error}</span>
<button onClick={signUp} className="btn btn-danger mb-3">Submit</button>
<hr />
<button onClick={signIn} className="btn border border-white w-100 text-white mb-3"><span className="text-danger pe-3">{googleFont} </span> Sign in</button>
               </div>
              
               <Link className="text-danger" to="/login">
<p>Already have an account!</p>
</Link>
             </div>

           </div>
        </div>
    );
};

export default Register;