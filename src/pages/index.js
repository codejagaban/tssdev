import React from "react"
import AboutIntro from "../components/AboutIntro"
import Blog from "../components/Blog"
import CheckoutWidget from "../components/CheckoutWidget"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import Layout from "../components/Layouts"
import Restaurant from "../components/Resturants"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"

const HomePage = () => {
  return (
    <Layout>
      <div>
        <Hero />
        <div className="container">
          <CheckoutWidget />
          <AboutIntro />
        </div>
        <Services />
        <Testimonials />
        <div className="container">
          <Restaurant />
          <Blog />
        </div>
        <Gallery />
      </div>
    </Layout>
  )
}

export default HomePage