import React from "react"
import styled from "styled-components"
import client from "../../images/client.png";

const TestimonialItem = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <img src={client} alt="John Doe" />
        <div>
          <h5>John Doe</h5>
          <p>IT Engineer</p>
       </div>
      </InfoWrapper>
      <CustomerText>
        <p>
          I'm very glad I had the opportunity to visit this hotel. The stuff is very friendly and I will definetly visit the hotel again next year.
        </p>
      </CustomerText>
  </Wrapper>
  )
}
const Wrapper = styled.div`
  margin: 10px;
  `
const InfoWrapper = styled.div`
  display: flex;
  img {
    width: 57px;
  }
  div {
    margin-left: 20px;
    h5 {
      font-size: 18px;
    }
    p {
      opacity: 0.5;
    }
  }
 `
const CustomerText = styled.div`
  margin-top: 10px;
  font-weight: 500;
  width: 70%

 `

export default TestimonialItem