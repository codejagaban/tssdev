import React from "react"
import AboutIntro from "../components/AboutIntro"
import Gallery from "../components/Gallery"
import Header from "../components/Header.js"
import Layout from "../components/Layouts"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"

const About = () => {
  return (
    <Layout>
      <Header
        text="About Us"
      />
      <div className="container">
        <AboutIntro />
      </div>
      <Services />
      <Testimonials />
      <Gallery />
    </Layout>
  )
}

export default About