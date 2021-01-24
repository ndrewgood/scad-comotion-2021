import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Description from "../components/description"
import Schedule from "../components/schedule"
import Attendees from "../components/attendees"
import Team from "../components/team"
import Footer from "../components/footer"

import "../styles/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="CoMotion 2021" />
    <Hero />
    <Description />
    <Schedule />
    <Attendees />
    <Team />
    <Footer />
  </Layout>
)

export default IndexPage
