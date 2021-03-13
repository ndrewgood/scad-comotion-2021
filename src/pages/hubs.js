import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from '../components/footer'

import hand from '../assets/png/hubsHandCrop.png'

import '../styles/hubs.scss'

const HubsPage = () => (
  <Layout>
    <SEO title="SCAD CoMotion 2021" />
    <div className="hubs-hero">
      <div className="hubs-heroFade"></div>
      <img className="hubs-hand" src={hand} alt=""/>
    </div>
    <div className="hubs">
      <h1>Hubs</h1>
      <div className="hubs-description">
        <p>CoMotion is a student-led motion graphics conference at the Savannah College of Art and Design.</p>
        <p>It is being held <span>remotely</span> on March 18th - 20th, 2021.</p>
      </div>
      <div className="hubs-buttonContainer">
        <a target="_blank" href="#" className="button">Link to Room 1</a>
      </div>
    </div>
    <div className="hubsFooterFade"></div>
    <Footer />
  </Layout>
)

export default HubsPage
