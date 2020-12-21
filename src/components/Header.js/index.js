import React from "react";
import PropTypes from "prop-types";
import bgImg from "../../images/bg-hero.png"
import styled from "styled-components";

const propTypes = {
  text: PropTypes.string.isRequired,
}
const Header = ({ title, text }) => (
  <HeaderWrapper>
    <div className="container">
      <div>
      <h2>{text}</h2>
       <h3>Home | {text}</h3>
      </div>
    </div>
    </HeaderWrapper>
)

const HeaderWrapper = styled.div`
  height: 324px;
  background: url(${bgImg});
  color: #FFFFFF;
  .container {
    display: flex;
  justify-content: flex-start;
  align-items: center;
  }
    `
Header.propTypes = propTypes
export default Header;