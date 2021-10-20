import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Collapse, Container, Nav, Navbar,Card } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css"
const Header = () => {
  const phoneFont=<FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
  const inboxFont=<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
  const mapFont=<FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
  const logoFont=<FontAwesomeIcon icon={faStethoscope}></FontAwesomeIcon>
  const facebookFont=<FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
  const twitterFont=<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
  const instaFont=<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
  const linkedinFont=<FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
const {user,logOut}=useAuth();
const [open, setOpen] = useState(false);
const history=useHistory()
const handleClick=()=>{
  history.push("/update_profile")
}

  console.log(user)
    return (
        <div>
         <div className=" bg-dark">
         <div className="py-3 row m-0 row-cols-lg-2">
           <div className="col">
           <p className="mb-0 d-lg-flex text-white fw-light">
             <span className="d-block"><span className="mx-2 text-danger">{phoneFont}</span> +1 733 244 1212 |</span>
                   <span className="d-block"> <span className="mx-2 text-danger">{inboxFont}</span> info@mediicare.com |</span>
                   <span className="d-block"> <span className="mx-2 text-danger">{mapFont}</span> 1212 Jonathon Road,London,UK</span></p>
           </div>
           <div className="col justify-content-end d-flex px-5">
           <p className="d-flex mb-0 gap-3 fs-6 px-0">
                        <a href="https://www.facebook.com/AliSainOfficial" className="link-hover"><span>{facebookFont}</span></a>
                       <a href="https://www.twitter.com/alidaexpert" className="link-hover"> <span>{twitterFont}</span></a>
                        <a href="https://www.instagram.com/alidaexpert" className="link-hover"><span>{instaFont}</span></a>
                        <a href="https://www.linkedin.com/in/alidaexpert" className="link-hover"><span>{linkedinFont}</span></a>
                    </p>
           </div>

         </div>
         </div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="border-top border-light">
    <Container>
    <Navbar.Brand as={Link} to="/"><span className="text-danger">{logoFont}</span> MediiCare</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/services">Services</Nav.Link>
      <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
     {
       !user.email ? <Nav.Link as={Link} to="/login">Login</Nav.Link>
        :
         <div className="d-lg-flex border-start  ms-lg-2">
           <Navbar.Text className="text-white ms-2">
           Signed in: <span className="text-danger"> 
          { 
             user.displayName || user.email
           }
           </span>
         </Navbar.Text>
       <div className=" mx-3 mt-3 mt-lg-0 d-flex align-items-center justify-content-between">
         <button onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open}  className="btn btn-info ">
        {
          user.photoURL ?<img   src={user.photoURL} className="w-25 rounded-circle" alt="" />
: <small>Profile</small>
        }
         </button>
      
      
       <div style={{minHeight: '3rem'}}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body className="bg-dark border-0 mx-1" style={{width: '300px'}}>
       <button onClick={logOut} className="btn btn-info text-white mx-2 ">Log Out</button>
       <button onClick={handleClick} className="btn btn-primary text-white mx-2">My Profile</button>
       </Card>
          </div>
        </Collapse>
      </div>

       </div>
         </div>
     }
     </Nav>
    </Navbar.Collapse>
    
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;