/** @jsx jsx */
import React from "react"
import { jsx, css } from '@emotion/react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from '../components/footer'
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "../styles/process.scss"

import hand from "../assets/png/processHand.png"

import sf1_b from "../assets/process/1/Page1_Styleframe3_Base.png"
import sf1_h from "../assets/process/1/Page1_Styleframe3_Hover.png"
import sf2_b from "../assets/process/1/Page1_Styleframe4_Base.png"
import sf2_h from "../assets/process/1/Page1_Styleframe4_Hover.png"
import sf3_b from "../assets/process/1/Page1_Styleframe8_Base.png"
import sf3_h from "../assets/process/1/Page1_Styleframe8_Hover.png"
import sf4_b from "../assets/process/1/Page1_Styleframe9_Base.png"
import sf4_h from "../assets/process/1/Page1_Styleframe9_Hover.png"
import sf5_b from "../assets/process/1/Page1_Styleframe10_Base.png"
import sf5_h from "../assets/process/1/Page1_Styleframe10_Hover.png"
import sf6_b from "../assets/process/1/Page1_Styleframe11_Base.png"
import sf6_h from "../assets/process/1/Page1_Styleframe12_Hover.png"
import sf7_b from "../assets/process/1/Page1_Styleframe13_Base.png"
import sf7_h from "../assets/process/1/Page1_Styleframe13_Hover.png"
import sf8_b from "../assets/process/1/Page1_Styleframe14_Base.png"
import sf8_h from "../assets/process/1/Page1_Styleframe14_Hover.png"
import sf9_b from "../assets/process/1/Page1_Styleframe15_Base.png"
import sf9_h from "../assets/process/1/Page1_Styleframe15_Hover.png"
import sf10_b from "../assets/process/1/Page1_Styleframe16_Base.png"
import sf10_h from "../assets/process/1/Page1_Styleframe16_Hover.png"
import sf11_b from "../assets/process/1/Page1_Styleframe17_Base.png"
import sf11_h from "../assets/process/1/Page1_Styleframe17_Hover.png"
import sf12_b from "../assets/process/1/Page1_Styleframe18_Base.png"
import sf12_h from "../assets/process/1/Page1_Styleframe18_Hover.png"

import mc1_s from "../assets/process/2/card1.png"
import mc1_g from "../assets/process/2/card1.gif"
import mc2_s from "../assets/process/2/card2.png"
import mc2_g from "../assets/process/2/card2.gif"
import mc3_s from "../assets/process/2/card3.png"
import mc3_g from "../assets/process/2/card3.gif"

import igDesign from "../assets/process/3/3_igDesign.png"
import igGif1 from "../assets/process/3/3_igGif1.gif"
import igGif2 from "../assets/process/3/3_igGif2.gif"
import zoom1 from "../assets/process/3/3_zoom1.png"
import zoom2 from "../assets/process/3/3_zoom2.png"
import zoom3 from "../assets/process/3/3_zoom3.png"
import zoom4 from "../assets/process/3/3_zoom4.gif"

import mh1 from "../assets/process/4/mh1.jpg"
import mh2 from "../assets/process/4/mh2.jpg"
import mh3 from "../assets/process/4/mh3.jpg"

const styleframes = [
  {
    base: sf1_b,
    hover: sf1_h,
  },
  {
    base: sf2_b,
    hover: sf2_h,
  },
  {
    base: sf3_b,
    hover: sf3_h,
  },
  {
    base: sf4_b,
    hover: sf4_h,
  },
  {
    base: sf5_b,
    hover: sf5_h,
  },
  {
    base: sf6_b,
    hover: sf6_h,
  },
  {
    base: sf7_b,
    hover: sf7_h,
  },
  {
    base: sf8_b,
    hover: sf8_h,
  },
  {
    base: sf9_b,
    hover: sf9_h,
  },
  {
    base: sf10_b,
    hover: sf10_h,
  },
  {
    base: sf11_b,
    hover: sf11_h,
  },
  {
    base: sf12_b,
    hover: sf12_h,
  },
]

const ProcessPage = () => (
  <Layout>
    <SEO title="SCAD CoMotion 2021" />
    <div className="process-hero">
      <img className="process-hand" src={hand} alt=""/>
    </div>
    <div className="process layout">
      <h1>Process Page</h1>
      <p className="mt-40">This page contains process information for the making of CoMotion 2021, the title sequence, graphic design, and preparing a fully virtual conference during the pandemic. We hope you find this helpful in understanding the effort, determination, and teamwork this team presented this year. </p>
      <p className="italics mt-40">-CoMotion Documentary Team 2021</p>
      <div className="break-100"></div>
      <h2>Index</h2>
      <div className="flex flex-m mt-20">
        <AnchorLink to="process#title-sequence" className="button">Title Sequence</AnchorLink>
        <AnchorLink to="process#design-process" className="button">Design Process</AnchorLink>
        <AnchorLink to="process#deliverables" className="button">Deliverables</AnchorLink>
        <AnchorLink to="process#organizing-digitally" className="button">Organizing Digitally</AnchorLink>
      </div>
      <div className="break-100"></div>
      <h1 id="title-sequence">Title Sequence</h1>
      <iframe autoPlay width="670" height="377" src="https://www.youtube.com/embed/NQv6MuHlaCY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
      <p className="mt-20">The CoMotion 2021 title sequence is, as creative director Yuying Herr writes, ”about the process from death to rebirth. Even if the pandemic affects our lives, it will not affect our enthusiasm. The story begins with many dead musical instruments. The conductor directs them to play a grand symphony in the SCAD museum.” This piece incorporates 2D, 3D, and cel animation with flourishing symphonic audio to accompany the visuals.</p>
      <div className="grid-3 container-large mt-40">
      {
          styleframes.map(i => {
            const style1 = css`
            background-image: url(${i.base});
            `
            const style2 = css`
            background-image: url(${i.hover});
            `
            return(
              <div key={i} className="teamPic">
                <div className="sf sf1" css={style1}></div>
                <div className="sf" css={style2}></div>
              </div>
            )
          })
        }
      </div>
      <div className="break-50"></div>
      <iframe autoPlay width="670" height="377" src="https://www.youtube.com/embed/AU0kxDSvglc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
      <p className="mt-20">The animation process video is a compilation of asset and animation creation in C4D and After Effects by the animation lead, Desmond Du.</p>
      <div className="break-100"></div>
      <h1 id="design-process">Design Process</h1>
      <h2 className="mt-60">Static 2D & Motion Title Cards</h2>
      <div className="grid-2 container">
        <div className="hubs-cardContainer">
          <img src={mc1_s} alt=""/>
          <p>Initial concept and final render of the Typography Design category title card for the student showcase.</p>
        </div>
        <div className="hubs-cardContainer">
          <img src={mc1_g} alt=""/>
          <p>	Final motion of the Typography Design category title card for the student showcase.</p>
        </div>
        <div className="hubs-cardContainer">
          <img src={mc2_s} alt=""/>
          <p>Initial concept and final render of the Best in Show category title card for the student showcase.</p>
        </div>
        <div className="hubs-cardContainer">
          <img src={mc2_g} alt=""/>
          <p>	Final motion of the Best in Show category title card for the student showcase.</p>
        </div>
        <div className="hubs-cardContainer">
          <img src={mc3_s} alt=""/>
          <p>Initial concept and final render of the Illustrative Design category title card for the student showcase.</p>
        </div>
        <div className="hubs-cardContainer">
          <img src={mc3_g} alt=""/>
          <p>Final motion of the Illustrative Design category title card for the student showcase.</p>
        </div>
      </div>
      <h2 className="mt-60">Type Study</h2>

      <div className="break-100"></div>
      <h1 id="deliverables">Deliverables</h1>
      <h2 className="mt-60">Instagram Feed Design</h2>
      <img className="img-m" src={igDesign} alt=""/>
      <h2 className="mt-60">Instagram Sticker Pack</h2>
      <div className="grid-2 container">
        <img src={igGif1} alt=""/>
        <img src={igGif2} css={css`width: 150px !important; margin: auto;`} alt=""/>
      </div>
      <h2 className="mt-60">Zoom Background</h2>
      <div className="grid-2 container mt-40">
        <img src={zoom1} alt=""/>
        <img src={zoom2} alt=""/>
        <img src={zoom3} alt=""/>
        <img src={zoom4} alt=""/>
      </div>
      <div className="break-100"></div>
      <h1 id="organizing-digitally">Organizing Digitally</h1>
      <h2 className="mt-60">Using Discord</h2>
      <p className="bigPara mt-20">Discord is a multi-platform application used primarily for voice chat while gaming. However, its video, screen-sharing, organized text channels, pings, and large file size sharing capabilities has made it the primary candidate in hosting CoMotion 2021 Portfolio Reviews. Portfolio reviews are typically held in classrooms with a student conversing with a company where their work is displayed and critiqued while gaining a personal connection. Ensuring portfolio reviews could happen is an essential CoMotion attribute that was considered when creating CoMotion virtually this year. Discord allows companies to join their respective voice channels and wait for the students to join their channel. Once there, students can share their screen, talk verbally, enable their camera, and post in the chat simultaneously. MOMELove concluded Discord is the best way to simulate in-person portfolio reviews while maintaining an entirely virtual, safe, organized, and professional setting.</p>
      <p className="bigPara mt-20">MOMELove set up the Discord server and boosted it in order to get higher file size uploads and better audio and streaming quality. Boosting the server makes larger files easier to upload, allowing students to maximize their interview time.</p>
      <h2 className="mt-60">Size Management of Conference</h2>
      <p className="bigPara mt-20">CoMotion has always been held on-ground on campus. As CoMotion is held entirely virtual this year, there are less size constraints to account for physical space. Without the bustle of moving from room to room between reviews, considering space and privacy within each room, and the venue capacity, there is more space to accommodate companies and students. With over fifty companies and creators in attendance, CoMotion is at its current highest company attendance total. </p>
      <p className="bigPara mt-20">To manage the companies and students in the Discord server discussed above, MOMELove assigned private voice channels for each company. Detailed messages regarding navigating Discord were sent to companies and multiple Q&A sessions were held for students, which allowed for open questioning, testing, and troubleshooting to prepare for portfolio reviews. </p>
      <h2 className="mt-60">Mozilla Hubs WIPs</h2>

      <div className="grid-3 mt-20 container">
        <img src={mh1} alt=""/>
        <img src={mh2} alt=""/>
        <img src={mh3} alt=""/>
      </div>
      <p className="bigPara mt-20">Mozilla Hubs is a virtual space that allows for virtual avatars to venture in a predetermined space with voice chat, drawing, displaying videos and images, and full space customization. Mozilla Hubs is utilized in place of mixers, or business casual meets between students and companies to talk personally rather than review portfolios. Work in progress images for the creation of this space are pictured above.</p>

    </div>
    <div className="processFooterFade"></div>
    <Footer />
  </Layout>
)

export default ProcessPage
