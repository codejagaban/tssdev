import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import bgHero from "../../images/bg-hero.png"
import { ArrowLeft, ArrowRight } from "./Arrows"

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight/>,
  };
  const slides = [
    {
      image: bgHero,
      heading: "The best hotel you will ever need",
    },
    {
      image: bgHero,
      heading: "The best hotel you will ever need 2nded",
     },
  ]
  return (
    <HeroWrapper>
      <Slider {...settings}>
        {
          slides.map((slide, i)=> (
            <div key={i}>
              <SlideWrapper style={{ backgroundImage: `url(${slide.image})`, height: "662px" }}>
                <div className="container">
                  <div>
                    <div>
                    <h1>
                    {slide.heading}
                      </h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      </p>
                    </div>
                  </div>
                </div>
              </SlideWrapper>

            </div>
          ))
        }

      </Slider>
    </HeroWrapper>
  )
}
const HeroWrapper = styled.div`
  color: #FFFFFF;
  height: 662px;
  `
const SlideWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .container > div {
    display: flex;
    height: 100%;
    align-items: center;
    div {
      width: 576px;
      h1 {
      font-size: 62px;
      font-weight: 800;
      line-height: 1.3;
      margin-bottom: 20px;
    }
    p {
      width: 70%;
    }
  }
  }
  `

export default Hero