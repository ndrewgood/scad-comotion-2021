/** @jsx jsx */
import React from "react"
import { jsx, css } from '@emotion/react'

import Layout from "../components/layout"
import SEO from "../components/seo"

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
        <div className="button">Title Sequence</div>
        <div className="button">Design Process</div>
        <div className="button">Deliverables</div>
        <div className="button">Organizing Digitally</div>
      </div>
      <div className="break-100"></div>
      <h1>Title Sequence</h1>
      <iframe src="https://player.vimeo.com/video/396052371" width="800" height="460" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen className="mt-40 vimeo"></iframe>
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
      <div className="break-100"></div>
      <h1>Design Process</h1>
    </div>
  </Layout>
)

export default ProcessPage
