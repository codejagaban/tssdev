import React from "react";
import styled from "styled-components";
import BlogItem from "./BlogItem";


const Blog = () => {
  return (
    <Wrapper>
         <IntroWrapper>
      <h6>
        Blog
      </h6>
      <h2>
      Read our newest blog post right away
      </h2>
      </IntroWrapper>
      <ItemsWrapper>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
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

export default Blog