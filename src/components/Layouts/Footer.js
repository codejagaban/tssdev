import React from "react"
import styled from "styled-components";
import { Link } from "react-router-dom"
import mail from "../../images/mail.svg"
import phone from "../../images/phone.svg"
import map from "../../images/map-pin.svg"
import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import google from "../../images/google.svg"

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <FlexWrapper>
          <ItemWrapper style={{width: "40%"}}>
            <div style={{width: "70%"}}>
            <h3>Zetta Hotels</h3>
            <p>
                Our hotel is an image of quality and profesionalism combined with hard work and precision. You can expect only the best services from our staff.
            </p>
              <SocialMedia style={{ marginTop: "20px" }}>
                <Link to="#">
                  <img src={facebook} alt=""/>
                </Link>
                <Link to="#">
                  <img src={twitter} alt=""/>
                </Link>
                <Link to="#">
                  <img src={google} alt=""/>
                </Link>
              </SocialMedia>
           </div>
          </ItemWrapper>
          <FlexWrapper>
            <ItemWrapper>
              <div>
                <h4>Useful links</h4>
                <Link to="#">Blog</Link>
                <Link to="#">Room</Link>
                <Link to="#">GiftCard</Link>
                <Link to="#">Testimonials</Link>
             </div>
            </ItemWrapper>
            <ItemWrapper>
              <div>
              <h4>Privacy</h4>
              <Link to="#">Career</Link>
              <Link to="#">About Us</Link>
              <Link to="#">Contact Us</Link>
              <Link to="#">Services</Link>
             </div>
            </ItemWrapper>
            <ItemWrapper>
              <div>
                <h4>Contact Info</h4>
                <ContactInfo>
                  <p>
                 <img src={mail} alt=""/> example@yahoo.com
                </p>
                <p>
                 <img src={phone} alt=""/> +0 320 422 4254
                </p>
                <p>
                 <img src={map} alt=""/> Main Str Chicago Ilinois
                </p>
                </ContactInfo>
             </div>
            </ItemWrapper>
         </FlexWrapper>
        </FlexWrapper>
        <Copyright>
        <p>
          Copyright ©2020 All rights reserved | This template is made with love by <a href="/#">Marian</a>
          </p>
          <p>
            <Link to="/#">www.portfolioname.com</Link>
          </p>
        </Copyright>
      </div>
    </FooterWrapper>
  )
}
const FooterWrapper = styled.footer`
  background-color: #121212;
  padding: 100px 0 0 0;
  .container > div {
    display: flex;
  }
  `
const FlexWrapper = styled.div`
display: flex;
`
const ItemWrapper = styled.div`
margin: 10px 40px 10px 0;
  h3  {
    font-weight: 800;
    font-size: 24px;
    color: #FFFFFF;
    width: 300px;
    margin-bottom: 20px;
    width: 50%;
  }
  h4  {
    font-size: 18px;
    color: #FFFFFF;
  }
  p {
    color: #B1B1B1;
  }
  a {
    display: block;
    color: #5863F8;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    margin: 5px 0;
  }
  `
const SocialMedia = styled.div`
    margin-top: 20px;
    display: flex;
    a {
      margin: 0 5px;
    }`
const ContactInfo = styled.div`
  img {
    margin:10px 5px 0 0;
  }
  p {
    color: #ffffff;
  }
  `
const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
    p {
    color: #B1B1B1;
    margin: 10px 0;
    a {
      color: #5863F8;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    margin: 5px 0;
    }
  }`
export default Footer;
