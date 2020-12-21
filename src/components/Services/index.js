import React from "react";
import styled from "styled-components";
import Slider from "react-slick"
import servicesImg from "../../images/bg-service.png"
import hotelIcon from "../../images/hotel.svg"
import { ArrowLeft, ArrowRight } from "./Arrows";

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight/>,
  };
  const slides = [
    {
      icon: hotelIcon,
      heading: "Free Wifi to stay connected",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      icon: hotelIcon,
      heading: "4K Television and Netflix included",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      icon: hotelIcon,
      heading: "4K Television and Netflix included",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      icon: hotelIcon,
      heading: "Spacious rooms for awesome parties",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
      icon: hotelIcon,
      heading: "Spacious rooms for awesome parties",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
     },
  ]
  return (
    <ServicesWrapper>
      <div className="container">
        <h6>About Us</h6>
        <h2>
          We bring you the finest details
        </h2>
        <Slider {...settings}>
        {
          slides.map((slide, i)=> (
            <div key={i}>
              <Wrapper>
                <div>
                  <IconWrapper>
                  <img src={slide.icon} alt=""/>
                  </IconWrapper>
                  <h1>
                    {slide.heading}
                  </h1>
                  <p>
                    {slide.description}
                  </p>
                  </div>
              </Wrapper>

            </div>
          ))
        }
        </Slider>
      </div>
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.div`
  background:linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${servicesImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 100px 0;
  h2 {
    font-size: 42px;
    color: #ffffff;
    width: 30%;
  }
`

const Wrapper = styled.div`
  margin: 20px 10px;
  padding: 20px 25px;
  background: #ffffff;
  text-align: center;
  height: 260px;
  h1 {
    font-size: 18px;
    margin-bottom: 20px;
  }
`
const IconWrapper = styled.div`
  background: #5863F8;
  padding: 30px;
  border-radius: 50%;
  margin: 0 auto 10px auto;
  height: 58px;
  width: 59px;

  `

export default Services