import React from "react"
import styled from "styled-components"
import image from "../../images/photo1.png"

const Photo = () => {
  return (
    <ItemWrapper>
      <img src={image} alt="Food" />
    </ItemWrapper>
  )
}
const ItemWrapper = styled.div`

  img{
    object-fit: cover;
    width: 100%;
  }
  `
export default Photo