import React from "react"
import styled from "styled-components"
import image from "../../images/dish1.png"
import arrowRight from "../../images/arrow-right-white.svg"

const BlogItem = () => {
  return (
    <ItemWrapper>
      <img src={image} alt="Food" />
      <div>
      <h6>Food</h6>
      <h5>Fresh fish and onions</h5>
      <p>
        Fresh food directly from our restaurant ready coocked for you and you familly
      </p>
      </div>
      <button>
        <img src={arrowRight} alt=""/>
      </button>
    </ItemWrapper>
  )
}
const ItemWrapper = styled.div`
  background-color: #EEEEEE;
  height: 190px;
  margin: 10px;
  display: flex;
  flex: 0 0 48%;
  div {
    margin-left: 5px;
    padding: 30px;
    h5 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    p {
      opacity: 0.5
    }
  }
  button {
    padding: 20px;
    align-self: flex-end;
    background-color: #5863F8;
    outline: none;
    cursor: pointer;
    border: 1px solid #5863F8;
  }
  `
export default BlogItem