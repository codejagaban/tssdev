import React from "react"
import styled from "styled-components"
import image from "../../images/blog-image.png"

const BlogItem = () => {
  return (
    <ItemWrapper>
      <img src={image} alt="Food" />
      <div>
      <h6>Food and life</h6>
      <h5>Succed in hotel business</h5>
      <p>
        Fresh food directly from our restaurant ready coocked for you and you familly
      </p>
      </div>

    </ItemWrapper>
  )
}
const ItemWrapper = styled.div`
  background-color: #EEEEEE;
  margin: 10px;
  flex: 0 0 31.3333%;
  img{
    object-fit: cover;
    width: 100%;
  }
  div {
    padding: 30px;
    text-align: center;
    h5 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    p {
      opacity: 0.5
    }
  }
  `
export default BlogItem