import React from "react";
import styled from "styled-components";
import RestaurantItem from "./Item";


const Restaurant = () => {
  return (
    <Wrapper>
         <IntroWrapper>
      <h6>
        Restaurant
      </h6>
      <h2>
        Explore our menu and eat what you want
      </h2>
      </IntroWrapper>
      <ItemsWrapper>
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
      </ItemsWrapper>
    </Wrapper>

  )
}
const Wrapper = styled.div`
  padding: 100px 0;
  `
const IntroWrapper = styled.div`
  width: 45%
  `
const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  `

export default Restaurant