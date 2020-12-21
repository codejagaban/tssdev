import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import aboutImg from "../../images/about.png"
import arrowRight from "../../images/arrow-right-white.svg"

const AboutIntro = () => (
  <AboutWrapper>
    <IntroWrapper>
    <h6>About Us</h6>
    <h2>
      Trust and quality are our atuus
      </h2>
    <Lead>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Lead>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
      <Link to="/about">
        <span>
        Read more
        </span>
         <img src={arrowRight} alt=""/>
      </Link>
    </IntroWrapper>
    <div>
      <img src={aboutImg} alt=""/>
    </div>
  </AboutWrapper>
)
const AboutWrapper = styled.div`
  display: flex;
  margin: 100px 0;
  justify-content: space-between;
  `
const IntroWrapper = styled.div`
  width: 40%;
  h2 {
    font-size: 42px;
    width: 80%;
    line-height: 1.3;
  }
  p {
    margin: 20px 20px 20px 0;
  }
  a {
    padding: 15px 30px;
    margin-top: 30px;
    color: #FFFFFF;
    background: #5863F8;
    width: inherit;
    text-transform: lowercase;
    text-decoration: none;
    display: block;
    span {
      margin-right: 15px;
      vertical-align: text-bottom;
    }
  }
  `
const Lead = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #000000
  `


export default AboutIntro