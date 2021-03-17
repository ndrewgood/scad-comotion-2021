import React, { useEffect, useState } from "react"
import moment from 'moment'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from '../components/footer'

import hand from '../assets/png/hubsHandCrop.png'
import lobby from '../assets/png/lobbyThumb.png'
import gallery from '../assets/png/galleryThumb.png'

import '../styles/hubs.scss'

const GalleryButton = () => (
  <a target="_blank" href="https://hubs.mozilla.com/sLkZude/comotion-2021-gallery" className="button">Link to the Gallery</a>
)

const GalleryButtonDisabled = () => (
  <p className="buttonDisabled">Gallery opens after the <br/>Student Showcase at 6:45pm EST</p>
)

const HubsPage = () => {

  let timeNow;

  // Fri Mar 19 2021 18:45:00 GMT-0400 (Eastern Daylight Time)
  let galleryLive = 1616193900;

  const [buttonStatus, setButtonStatus] = useState("show");


  useEffect(() => {
    setInterval(() => {
      timeNow = moment().format('X');
      if (timeNow >= galleryLive) {
        setButtonStatus("show");
      } else {
        setButtonStatus("hide");
      }

    }, 1000);
  }, []);
  return (
    <Layout>
      <SEO title="SCAD CoMotion 2021" />
      <div className="hubs-hero">
        <div className="hubs-heroFade"></div>
        <img className="hubs-hand" src={hand} alt=""/>
      </div>
      <div className="hubs">
        <h1>Hubs</h1>
        <div className="hubs-description">
          <p>This year at CoMotion 2021 we are proud to announce that we are utilizing the Mozilla Hubs platform! Mozilla Hubs is a virtual meeting space which you can instantly join on your browser, mobile device, or VR headset! Hubs supports voice and text chat, as well as sharing videos, images, and links. Connect with your friends in our lobby, or check out our design student showcase submission finalists in the gallery space. Have fun and enjoy this CoMotion's safe, socially distanced, experience!</p>
          <p>Use the buttons below to join one of the Mozilla Hub Rooms.</p>
        </div>
        <div className="hubs-buttonContainer container">
          <div className="hubs-Room">
            <img className="hubs-RoomThumb" src={lobby} alt=""/>
            <a target="_blank" href="https://hubs.mozilla.com/b4jat6c/comotion-2021-lobby" className="button">Link to the Lobby</a>
          </div>
          <div className="hubs-Room">
            <img className="hubs-RoomThumb" src={gallery} alt=""/>
            {buttonStatus == "show" ? <GalleryButton /> : <GalleryButtonDisabled />}
          </div>
        </div>
      </div>
      <div className="hubsFooterFade"></div>
      <Footer />
    </Layout>
  )
}

export default HubsPage
