import React from "react"

import Hand from '../assets/png/scheduleHand.png'
import Explode from '../assets/png/scheduleExplode.png'
import Clef from '../assets/png/scheduleClef.png'
import Train from '../assets/png/scheduleTrain2.png'


import '../styles/schedule.scss'

const Schedule = () => {

    return(
        <main className="scheduleMain">
            <div className="container">
                <div className="scheduleHeader">
                    <h1>Schedule</h1>
                    <div className="headerStar"></div>
                </div>
            </div>
            <div className="scheduleRow container firstRow">
                <div className="scheduleContent">
                    <h2>Day 1</h2>
                    <h3>Thursday, March 18th</h3>
                    <div className="eventContent">
                        <div className="eventDates">
                            <p>11:00am - 11:15am</p>
                            <p>11:15am - 11:30am</p>
                            <p>11:30am - 12:45pm</p>
                            <p>12:45pm - 1:45pm</p>
                            <p>2:00pm - 3:00pm</p>
                            <p>3:15pm - 4:30pm</p>
                        </div>
                        <div className="eventNames">
                            <p>Opening Statement</p>
                            <p>Title Sequence</p>
                            <p>The Influence of Online Communities Panel</p>
                            <p>Lunch Break</p>
                            <p>Workshop</p>
                            <p>Alumni Panel</p>
                        </div>
                    </div>
                    <div className="eventContentMobile">
                        <div className="eventMobile">
                            <p>11:00am - 11:15am</p>
                            <p>Opening Statement</p>
                        </div>
                        <div className="eventMobile">
                            <p>11:15am - 11:30am</p>
                            <p>Title Sequence</p>
                        </div>
                        <div className="eventMobile">
                            <p>11:30am - 12:45pm</p>
                            <p>The Influence of Online Communities Panel</p>
                        </div>
                        <div className="eventMobile">
                            <p>12:45pm - 1:45pm</p>
                            <p>Lunch Break</p>
                        </div>
                        <div className="eventMobile">
                            <p>2:00pm - 3:00pm</p>
                            <p>Workshop</p>
                        </div>
                        <div className="eventMobile">
                            <p>3:15pm - 4:30pm</p>
                            <p>Alumni Panel</p>
                        </div>
                    </div>
                </div>
                <img className="scheduleImage sHand" src={Explode}></img>
            </div>
            <div className="scheduleRow container secondRow">
            <img className="scheduleImage sTrain" src={Train}></img>
                <div className="scheduleContent sRight">
                    <h2>Day 2</h2>
                    <h3>Friday, March 19th</h3>
                    <div className="eventContent">
                        <div className="eventDates">
                            <p>11:00am - 1:00pm</p>
                            <p>1:00pm - 1:45pm</p>
                            <p>1:45pm - 2:45pm</p>
                            <p>3:00pm - 4:15pm</p>
                            <p>4:30pm - 6:45pm</p>
                        </div>
                        <div className="eventNames">
                            <p>Portfolio Reviews</p>
                            <p>Lunch Break</p>
                            <p>Portfolio Reviews</p>
                            <p>Design for Social Justice Panel</p>
                            <p>Student Showcase</p>
                        </div>
                    </div>
                    <div className="eventContentMobile">
                        <div className="eventMobile">
                            <p>11:00am - 1:00pm</p>
                            <p>Portfolio Reviews</p>
                        </div>
                        <div className="eventMobile">
                            <p>1:00pm - 1:45pm</p>
                            <p>Lunch Break</p>
                        </div>
                        <div className="eventMobile">
                            <p>1:45pm - 2:45pm</p>
                            <p>Portfolio Reviews</p>
                        </div>
                        <div className="eventMobile">
                            <p>3:00pm - 4:15pm</p>
                            <p>Design for Social Justice Panel</p>
                        </div>
                        <div className="eventMobile">
                          <p>4:30pm - 6:45pm</p>
                          <p>Student Showcase</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scheduleRow container thirdRow">
                <div className="scheduleContent">
                    <h2>Day 3</h2>
                    <h3>Saturday, March 20th</h3>
                    <div className="eventContent">
                        <div className="eventDates">
                            <p>10:00am - 11:15am</p>
                            <p>11:30am - 12:30pm</p>
                            <p>12:30pm - 1:15pm</p>
                            <p>1:15pm - 3:15pm</p>
                            <p>3:30pm - 4:30pm</p>
                        </div>
                        <div className="eventNames">
                            <p>Innovation within the Remote Experience Panel</p>
                            <p>Portfolio Reviews</p>
                            <p>Lunch Break</p>
                            <p>Portfolio Reviews</p>
                            <p>Keynote Speaker</p>
                        </div>
                    </div>
                    <div className="eventContentMobile">
                        <div className="eventMobile">
                            <p>10:00am - 11:15am</p>
                            <p>Innovation within the Remote Experience Panel</p>
                        </div>
                        <div className="eventMobile">
                            <p>11:30am - 12:30pm</p>
                            <p>Portfolio Reviews</p>
                        </div>
                        <div className="eventMobile">
                            <p>12:30am - 1:15pm</p>
                            <p>Lunch Break</p>
                        </div>
                        <div className="eventMobile">
                            <p>1:15pm - 3:15pm</p>
                            <p>Portfolio Reviews</p>
                        </div>
                        <div className="eventMobile">
                            <p>3:30pm - 4:30pm</p>
                            <p>Keynote Speaker</p>
                        </div>
                    </div>
                </div>
                {/* <img className="scheduleImage sClef" src={Clef}></img> */}
            </div>
            <div className="divider2"></div>
        </main>
    )
}



export default Schedule
