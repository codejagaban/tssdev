import React from "react"
import styled from "styled-components"
import bgTestimonials from "../../images/bg-testimonials.png"
import TestimonialItem from "./item"
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Wrapper>
      <div className="container">
        <div>
        <h6>
          Testimonials
        </h6>
        <h2>
            We trust our customers and they trust us too
        </h2>
          <Slider {...settings}>
            <TestimonialItem />
            <TestimonialItem/>
          </Slider>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 487px;
  background-image: url(${bgTestimonials});
  background-position: right bottom;
  background-repeat: no-repeat;
  padding: 15px;
  .container > div {
    width: 45%;
    margin-top: 50px;
  }
`
export default Testimonials