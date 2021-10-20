import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../images/banner/banner011.jpg"
import banner2 from "../../../images/banner/banner033.jpg"
import banner3 from "../../../images/banner/banner044.jpg"
import "./Banner.css"
const Banner = () => {
    return (
        <div>
            <Carousel className="position-relative">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 "
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption className="text-white  bg-shadow  rounded-2">
      <h4>Our Specialit Doctor</h4>
      <small className="d-block pb-2">They are always try to make patient happy</small>
      <btn className="btn btn-info text-white">Meet Doctor</btn>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption className="text-white  bg-shadow  rounded-2">
      <h4>Our Dedicated Nurses</h4>
      <small className="d-block pb-2">Always preapre to help</small>
      <btn className="btn btn-info text-white">Book Appoinment</btn>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption className="text-white bg-shadow rounded-2">
      <h4>Our Surgery Doctor And Nurses</h4>
      <small className="d-block pb-2">Always ready to save a life</small>
      <btn className="btn btn-info text-white">Book Appoinment</btn>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        </div>
    );
};

export default Banner;