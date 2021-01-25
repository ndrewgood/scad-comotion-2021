import React from "react"

import "../styles/attendees.scss"

import aligned from "../assets/logos/aligned.png"

const Attendees = () => {
  return (
    <div className="attendeeMain" style={{marginTop:"0"}}>
      <div className="container">
          <h1>Attendees</h1>
        <div className="logo-grid">
          <img src={aligned} alt="aligned" />
          <img src={aligned} alt="aligned" />
          <img src={aligned} alt="aligned" />
          <img src={aligned} alt="aligned" />
        </div>
      </div>
    </div>
  )
}

export default Attendees
