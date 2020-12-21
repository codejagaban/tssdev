import React from "react"
import PropTypes from "prop-types"
import arrowLeft from "../../images/arrow-left.svg"
import arrowRight from "../../images/arrow-right.svg"
import styled from "styled-components"

export const ArrowLeft = ({ onClick }) => (
  <div>
    <LeftArrowWrapper
      onClick={onClick}>
      <img src={arrowLeft} alt=""/>
    </LeftArrowWrapper>
  </div>
)
ArrowLeft.propTypes = {
  onClick: PropTypes.func,
}

export const ArrowRight = ({ onClick }) => (
  <div>
    <RightArrowWrapper
      onClick={onClick}
    >
      <img src={arrowRight} alt=""/>
    </RightArrowWrapper>
  </div>
)
ArrowRight.propTypes = {
  onClick: PropTypes.func,
}

const LeftArrowWrapper = styled.button`
  width: 51px;
  height: 51px;
  cursor: pointer;
  background-color: #FFF;
  position: absolute;
  bottom: 10%;
  z-index: 10;
  right: 13.5%;
  outline: none;
  border: 1px solid #FFF;

  `
  const RightArrowWrapper = styled.button`
  width: 51px;
  height: 51px;
  cursor: pointer;
  background-color: #5863F8;
  position: absolute;
  bottom: 10%;
  z-index: 10;
  right: 10.3%;
  outline: none;
  border: 1px solid #5863F8;

  `