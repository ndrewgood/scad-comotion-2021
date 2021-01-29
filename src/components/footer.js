import React from "react"

import instagram from "../assets/png/instalogo.png"
import momelove from "../assets/png/momeloveLogo.png"

import "../styles/footer.scss"

const Footer = () => {
  return (
    <>
      <div className="footerTransition"></div>
      <div className="footer">
        <div className="footerContainer">
          <h1 className="footerHeader">Contact</h1>
          <p className="footerDescription">
            For any questions about the event, email MOME Love Co-Presidents
            Anna Vallario & Krysta Coates at <span><a rel="noreferrer" href="mailto:momelove@clubs.scad.edu">momelove@clubs.scad.edu.</a> </span> 
          </p>
          <div className="footer-icons">
            <div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/scadcomotion/"
              >
                <img className="instalogo" src={instagram} alt="instagram" />
              </a>
            </div>
            <div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/scadmomelove/"
              >
                <img className="momeloveLogo" src={momelove} alt="momelove" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
