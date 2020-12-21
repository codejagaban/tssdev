import React from "react";
import styled from "styled-components";
import Photo from "./Item";
import Slider from "react-slick"
import { ArrowLeft, ArrowRight } from "./Arrows"


const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight/>,

  };
  return (
    <Wrapper>
      <div className="container">
      <IntroWrapper>
        <h6>
          Photos
        </h6>
        <h2>
          See our latest photos from restaurant and hotel
        </h2>
      </IntroWrapper>
      </div>
      <Slider {...settings}>
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </Slider>
    </Wrapper>

  )
}
const Wrapper = styled.div`
  padding: 100px 0;
  `
const IntroWrapper = styled.div`
  width: 45%
  `
export default Gallery