import React from "react"
import Layout from "../components/layout"

import "../styles/livestream.scss"
 
const LivestreamPage = () => (
  <Layout>
  <main className="liveMain">
  <div className="liveContainer iframe-container">
  <iframe className="liveYoutube" autoPlay width="560" height="315" src="https://www.youtube.com/embed/Pn2Y2mNEkjU?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
  </div>
  <div className="liveBackgroundFade"></div>
  <div className="liveBackground"></div>
</main>
</Layout>
)

export default LivestreamPage
