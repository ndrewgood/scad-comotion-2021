/** @jsx jsx */
import React from "react"
import { jsx, css } from '@emotion/react'


import Layout from "../components/layout"
import SEO from "../components/seo"
import swirl from '../assets/png/teamSwirl.png'
import "../styles/main.scss"
import "../styles/team.scss"
import Footer from '../components/footer'

import mlAlexM from "../assets/teamPics/momelove/Alexandera_Marca_Officer_A_gradient.jpg"
import mlAnnaV from "../assets/teamPics/momelove/Anna_Vallario_A_gradient.jpg"
import mlAnnaY from "../assets/teamPics/momelove/Anna_Yang_Officer_A_gradient.jpg"
import mlCarlyJ from "../assets/teamPics/momelove/Carly_Johnson_A_gradient.jpg"
import mlCoulterD from "../assets/teamPics/momelove/Coulter_DeSimone_A_gradient.jpg"
import mlGhiaV from "../assets/teamPics/momelove/Ghia_Villasin_Officer_A_gradient.jpg"
import mlKaganM from "../assets/teamPics/momelove/Kagan_Marks_Officer_A_gradient.jpg"
import mlKalebS from "../assets/teamPics/momelove/Kaleb_Sweeney_A_gradient.jpg"
import mlKrystaC from "../assets/teamPics/momelove/Krysta_Coates_A_gradient.jpg"
import mlYorliethA from "../assets/teamPics/momelove/Yorlieth_Avila_Officer_A_gradient.jpg"

import mlAlexM2 from "../assets/teamPics/momeloveB/Alexandera_Marca_Officer_B.jpg"
import mlAnnaV2 from "../assets/teamPics/momeloveB/Anna_Vallario_B.jpg"
import mlAnnaY2 from "../assets/teamPics/momeloveB/Anna_Yang_Officer_B.jpg"
import mlCarlyJ2 from "../assets/teamPics/momeloveB/Carly_Johnson_B.jpg"
import mlCoulterD2 from "../assets/teamPics/momeloveB/Coulter_DeSimone_B.jpg"
import mlGhiaV2 from "../assets/teamPics/momeloveB/Ghia_Villasin_Officer_B.jpg"
import mlKaganM2 from "../assets/teamPics/momeloveB/Kagan_Marks_Officer_B.jpg"
import mlKalebS2 from "../assets/teamPics/momeloveB/Kaleb_Sweeney_B.jpg"
import mlKrystaC2 from "../assets/teamPics/momeloveB/Krysta_Coates_B.jpg"
import mlYorliethA2 from "../assets/teamPics/momeloveB/Yorlieth_Avila_Officer_B.jpg"

import btYuyingH from '../assets/teamPics/brandteam/Yuying_Herr_A_gradient.jpg'
import btFreyaY from '../assets/teamPics/brandteam/Freya_Yeh_A_gradient.jpg'
import btKaganM from '../assets/teamPics/brandteam/Kagan_Marks_A_gradient.jpg'
import btScottS from '../assets/teamPics/brandteam/Scott_Sandifer_A_gradient.jpg'
import btDesmondD from '../assets/teamPics/brandteam/Desmond_Du_A_gradient.jpg'
import btKathieY from '../assets/teamPics/brandteam/Kathie_Yang_A_gradient.jpg'
import btMelP from '../assets/teamPics/brandteam/Mel_Petzoldt_A_gradient.jpg'
import btAlexanderaM from '../assets/teamPics/brandteam/Alexandera_Marca_A_gradient.jpg'
import btAuraleeM from '../assets/teamPics/brandteam/Auralee_Mayfield_A_gradient.jpg'
import btObiN from '../assets/teamPics/brandteam/Obi_Nwosisi_A_gradient.jpg'
import btYuXinK from '../assets/teamPics/brandteam/Yu_Xin_King_A_gradient.jpg'
import btAnnaY from '../assets/teamPics/brandteam/Anna_Yang_A_gradient.jpg'
import btGhiaV from '../assets/teamPics/brandteam/Ghia_Villasin_A_gradient.jpg'
import btOliviaT from '../assets/teamPics/brandteam/Olivia_Trotter_A_gradient.jpg'
import btGregM from '../assets/teamPics/brandteam/Greg_Markman_A_gradient.jpg'
import btLeahE from '../assets/teamPics/brandteam/Leah_Evans_A_gradient.jpg'
import btLirioR from '../assets/teamPics/brandteam/Lirio_Ramirez_A_gradient.jpg'
import btPranayP from '../assets/teamPics/brandteam/Pranay_Parekh_A_gradient.jpg'
import btWendyH from '../assets/teamPics/brandteam/Wendy_Huang_A_gradient.jpg'
import btDaAeK from '../assets/teamPics/brandteam/DaAe_Kim_A_gradient.jpg'
import btAlaijahH from '../assets/teamPics/brandteam/Alaijah_Hampton_A_gradient.jpg'
import btEricaK from '../assets/teamPics/brandteam/Erica_Kim_A_gradient.jpg'
import btYorliethA from '../assets/teamPics/brandteam/Yorlieth_Avila_A_gradient.jpg'
import btAlyssaK from '../assets/teamPics/brandteam/Alyssa_Kalbus_A_gradient.jpg'
import btSabrinaG from '../assets/teamPics/brandteam/Sabrina_Guyton_A_gradient.jpg'
import btLaurenN from '../assets/teamPics/brandteam/Lauren_Neu_A_gradient.jpg'
import btAndrewG from '../assets/teamPics/brandteam/Andrew_Goodridge_A_gradient.jpg'
import btEricF from '../assets/teamPics/brandteam/Eric_Flatt_A_gradient.jpg'
import btAlexC from '../assets/teamPics/brandteam/Alex_Campbell_A_gradient.jpg'
import btRileyC from '../assets/teamPics/brandteam/Riley_Carson_A_gradient.jpg'
import btMichaelK from '../assets/teamPics/brandteam/Michael_Kara_A_gradient.jpg'
import btTzuyingW from '../assets/teamPics/brandteam/Tzuying_Wang_A_gradient.jpg'


import btYuyingH2 from '../assets/teamPics/brandteamB/Yuying_Herr_B.jpg'
import btFreyaY2 from '../assets/teamPics/brandteamB/Freya_Yeh_B.jpg'
import btKaganM2 from '../assets/teamPics/brandteamB/Kagan_Marks_B.jpg'
import btScottS2 from '../assets/teamPics/brandteamB/Scott_Sandifer_B.gif'
import btDesmondD2 from '../assets/teamPics/brandteamB/Desmond_Du_B.jpg'
import btKathieY2 from '../assets/teamPics/brandteamB/Kathie_Yang_B.jpg'
import btMelP2 from '../assets/teamPics/brandteamB/Mel_Petzoldt_B.jpg'
import btAlexanderaM2 from '../assets/teamPics/brandteamB/Alexandera_Marca_B.jpg'
import btAuraleeM2 from '../assets/teamPics/brandteamB/Auralee_Mayfield_B.jpg'
import btObiN2 from '../assets/teamPics/brandteamB/Obi_Nwosisi_B.jpg'
import btYuXinK2 from '../assets/teamPics/brandteamB/Yu_Xin_King_B.jpg'
import btAnnaY2 from '../assets/teamPics/brandteamB/Anna_Yang_B.jpg'
import btGhiaV2 from '../assets/teamPics/brandteamB/Ghia_Villasin_B.jpg'
import btOliviaT2 from '../assets/teamPics/brandteamB/Olivia_Trotter_B.jpg'
import btGregM2 from '../assets/teamPics/brandteamB/Greg_Markman_B.jpg'
import btLeahE2 from '../assets/teamPics/brandteamB/Leah_Evans_B.jpg'
import btLirioR2 from '../assets/teamPics/brandteamB/Lirio_Ramirez_B.jpg'
import btPranayP2 from '../assets/teamPics/brandteamB/Pranay_Parekh_B.jpg'
import btWendyH2 from '../assets/teamPics/brandteamB/Wendy_Huang_B.jpg'
import btDaAeK2 from '../assets/teamPics/brandteamB/DaAe_Kim_B.jpg'
import btAlaijahH2 from '../assets/teamPics/brandteamB/Alaijah_Hampton_B.jpg'
import btEricaK2 from '../assets/teamPics/brandteamB/Erica_Kim_B.jpg'
import btYorliethA2 from '../assets/teamPics/brandteamB/Yorlieth_Avila_B.jpg'
import btAlyssaK2 from '../assets/teamPics/brandteamB/Alyssa_Kalbus_B.jpg'
import btSabrinaG2 from '../assets/teamPics/brandteamB/Sabrina_Guyton_B.jpg'
import btLaurenN2 from '../assets/teamPics/brandteamB/Lauren_Neu_B.jpg'
import btAndrewG2 from '../assets/teamPics/brandteamB/Andrew_Goodridge_B.jpg'
import btEricF2 from '../assets/teamPics/brandteamB/Eric_Flatt_B.jpg'
import btAlexC2 from '../assets/teamPics/brandteamB/Alex_Campbell_B.jpg'
import btRileyC2 from '../assets/teamPics/brandteamB/Riley_Carson_B.jpg'
import btMichaelK2 from '../assets/teamPics/brandteamB/Michael_Karaman_B.jpg'
import btTzuyingW2 from '../assets/teamPics/brandteamB/Tzuying_Wang_B.jpg'



const momelove = [
  {
    name: "Krysta Coates",
    role: "Co-President",
    pic1: mlKrystaC,
    pic2: mlKrystaC2,
    link: "http://krystacoates.com/"
  },
  {
    name: "Anna Vallario",
    role: "Co-President",
    pic1: mlAnnaV,
    pic2: mlAnnaV2,
    link: "https://annavallario.com/"
  },
  {
    name: "Carly Johnson",
    role: "Vice President",
    pic1: mlCarlyJ,
    pic2: mlCarlyJ2,
    link: "https://www.carlyjohnsonart.com/"
  },
  {
    name: "Anna Yang",
    role: "Officer",
    pic1: mlAnnaY,
    pic2: mlAnnaY2,
    link: "https://www.annayang.design/"
  },
  {
    name: "Ghia Villasin",
    role: "Officer",
    pic1: mlGhiaV,
    pic2: mlGhiaV2,
    link: "https://villasing.com/"
  },
  {
    name: "Coulter DeSimone",
    role: "Officer",
    pic1: mlCoulterD,
    pic2: mlCoulterD2,
    link: "https://www.coulterdesimone.com/"
  },
  {
    name: "Kaleb Sweeney",
    role: "Officer",
    pic1: mlKalebS,
    pic2: mlKalebS2,
    link: "https://kalebriver.wixsite.com/mysite-1"
  },
  {
    name: "Kagan Marks",
    role: "Officer",
    pic1: mlKaganM,
    pic2: mlKaganM2,
    link: "https://www.kaganmarks.com/"
  },
  {
    name: "Alexandera Marca",
    role: "Treasurer",
    pic1: mlAlexM,
    pic2: mlAlexM2,
    link: "https://www.kelseyalexandera.com/"
  },
  {
    name: "Yorlieth Avila",
    role: "Officer",
    pic1: mlYorliethA,
    pic2: mlYorliethA2,
    link: "https://yorliethavila.myportfolio.com/"
  },
]

const brandingteam = [
  {
    name: "Yuying Herr",
    role: "Creative Director",
    pic1: btYuyingH,
    pic2: btYuyingH2,
    link: "https://yuyingherr.com/"
  },
  {
    name: "Freya Yeh",
    role: "Art Director",
    pic1: btFreyaY,
    pic2: btFreyaY2,
    link: "https://www.freyayeh.com/"
  },
  {
    name: "Kagan Marks",
    role: "Producer",
    pic1: btKaganM,
    pic2: btKaganM2,
    link: "https://www.kaganmarks.com/"
  },
  {
    name: "Scott Sandifer",
    role: "Producer",
    pic1: btScottS,
    pic2: btScottS2,
    link: "https://scottsandifer.com"
  },
  {
    name: "Desmond Du",
    role: "Lead Animator",
    pic1: btDesmondD,
    pic2: btDesmondD2,
    link: "http://duitbetter.com/"
  },
  {
    name: "Kathie Yang",
    role: "Lead Designer",
    pic1: btKathieY,
    pic2: btKathieY2,
    link: "https://www.woodgeo-art.com/"
  },
  {
    name: "Mel Petzoldt",
    role: "Lead Graphic Designer",
    pic1: btMelP,
    pic2: btMelP2,
    link: "http://melpetz.com/"
  },
  {
    name: "Alexandera Marca",
    role: "Lead Documentation",
    pic1: btAlexanderaM,
    pic2: btAlexanderaM2,
    link: "https://www.kelseyalexandera.com/"
  },
  {
    name: "Auralee Mayfield",
    role: "Designer",
    pic1: btAuraleeM,
    pic2: btAuraleeM2,
    link: "https://auraleemayfield.tumblr.com/"
  },
  {
    name: "Obi Nwosisi",
    role: "Designer",
    pic1: btObiN,
    pic2: btObiN2,
    link: "https://www.onwos.com/"
  },
  {
    name: "Yu Xin King",
    role: "Designer",
    pic1: btYuXinK,
    pic2: btYuXinK2,
    link: "https://www.behance.net/KINGYUXIN"
  },
  {
    name: "Anna Yang",
    role: "Design & Graphic Designer",
    pic1: btAnnaY,
    pic2: btAnnaY2,
    link: "https://www.annayang.design/"
  },
  {
    name: "Ghia Villasin",
    role: "Design & Graphic Designer",
    pic1: btGhiaV,
    pic2: btGhiaV2,
    link: "https://villasing.com/"
  },
  {
    name: "Olivia Trotter",
    role: "Design & Animator",
    pic1: btOliviaT,
    pic2: btOliviaT2,
    link: "https://www.oliviatrotter.com/"
  },
  {
    name: "Greg Markman",
    role: "Animator",
    pic1: btGregM,
    pic2: btGregM2,
    link: "https://www.wowgreg.cool/"
  },
  {
    name: "Leah Evans",
    role: "Animator",
    pic1: btLeahE,
    pic2: btLeahE2,
    link: "http://www.leahe.tv/"
  },
  {
    name: "Lirio Ramirez",
    role: "Animator",
    pic1: btLirioR,
    pic2: btLirioR2,
    link: "https://www.lirioramirez.com"
  },
  {
    name: "Pranay Parekh",
    role: "Animator",
    pic1: btPranayP,
    pic2: btPranayP2,
    link: "https://themotionmovement.com"
  },
  {
    name: "Wendy Huang",
    role: "Animator",
    pic1: btWendyH,
    pic2: btWendyH2,
    link: "http://wanchinghuang.com/"
  },
  {
    name: "DeAe Kim",
    role: "Animator",
    pic1: btDaAeK,
    pic2: btDaAeK2,
    link: "https://www.daaekim.com/"
  },
  {
    name: "Alaijah Hampton",
    role: "Graphic Designer",
    pic1: btAlaijahH,
    pic2: btAlaijahH2,
    link: "https://alaijahhamptondesign.com/"
  },
  {
    name: "Erica Kim",
    role: "Graphic Designer",
    pic1: btEricaK,
    pic2: btEricaK2,
    link: "https://www.erikim94.com/"
  },
  {
    name: "Yorlieth Avila",
    role: "Graphic Designer",
    pic1: btYorliethA,
    pic2: btYorliethA2,
    link: "https://yorliethavila.myportfolio.com/"
  },
  {
    name: "Alyssa Kalbus",
    role: "Graphic Designer",
    pic1: btAlyssaK,
    pic2: btAlyssaK2,
    link: "https://alyssakalbus.myportfolio.com/"
  },
  {
    name: "Sabrina Guyton",
    role: "Documentation",
    pic1: btSabrinaG,
    pic2: btSabrinaG2,
    link: "https://www.sabrinaguyton.com/"
  },
  {
    name: "Lauren Neu",
    role: "Documentation",
    pic1: btLaurenN,
    pic2: btLaurenN2,
    link: "https://laurenneu.myportfolio.com/work"
  },
  {
    name: "Andrew Goodridge",
    role: "Web Developer",
    pic1: btAndrewG,
    pic2: btAndrewG2,
    link: "https://ndrewgood.com/"
  },
  {
    name: "Eric Flatt",
    role: "Web Developer",
    pic1: btEricF,
    pic2: btEricF2,
    link: "https://ericflattdesign.com/"
  },
  {
    name: "Alex Campbell",
    role: "Experiential Designer",
    pic1: btAlexC,
    pic2: btAlexC2,
    link: "https://www.aokvisions.com/"
  },
  {
    name: "Riley Carson",
    role: "Experiential Designer",
    pic1: btRileyC,
    pic2: btRileyC2,
    link: "https://madebyriley.com"
  },
  {
    name: "Michael Karaman",
    role: "Sound Designer",
    pic1: btMichaelK,
    pic2: btMichaelK2,
    link: "https://www.mikesmotions.com/"
  },
  {
    name: "Tzuying Wang",
    role: "Sound Designer",
    pic1: btTzuyingW,
    pic2: btTzuyingW2,
    link: "https://cjco1997.wixsite.com/wanzinn"
  },
]


const IndexPage = () => (
  <Layout>
    <SEO title="SCAD CoMotion 2021" />
    <div className="team-hero">
      <div className="team-heroFade"></div>
      <img className="team-swirl" src={swirl} alt=""/>
    </div>
    <div className="team">
      <h1>CoMotion Team</h1>
      <h2>MOMELove Officers</h2>
      <div className="teamGrid container">
        {
          momelove.map(i => {
            const style1 = css`
            background-image: url(${i.pic1});
            `
            const style2 = css`
            background-image: url(${i.pic2});
            `
            return(
              <a key={i.link}className="teamPic" target="_blank" href={i.link}>
                <div className="tPic tPic1" css={style1}></div>
                <div className="tPic tPic2" css={style2}></div>
                <p className="tName">{i.name}</p>
                <p className="tRole">{i.role}</p>
              </a>
            )
          })
        }
      </div>
      <h2>Branding Team</h2>
      <div className="teamGrid container">
        {
          brandingteam.map(i => {
            const style1 = css`
            background-image: url(${i.pic1});
            `
            const style2 = css`
            background-image: url(${i.pic2});
            `
            return(
              <a key={i.link}className="teamPic" target="_blank" href={i.link}>
                <div className="tPic tPic1" css={style1}></div>
                <div className="tPic tPic2" css={style2}></div>
                <p className="tName">{i.name}</p>
                <p className="tRole">{i.role}</p>
              </a>
            )
          })
        }
      </div>
    </div>
    <div className="teamFooterFade"></div>
    <Footer />
  </Layout>
)

export default IndexPage
