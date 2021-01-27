import React from "react"

import '../styles/schedule.scss'

const Schedule = () => {

    return(
        <main className="scheduleMain">
            <div className="container">
                <div className="scheduleHeader">
                    <span>*</span>
                    <h1>Schedule</h1>
                </div>
            </div>
            <div className="scheduleRow container">
                <div className="scheduleContent">
                    <h2>Day 1</h2>
                    <h3>Thursday, March 18th</h3>
                    <div className="scheduleEvent">
                        <p>11:00am - 11:15am</p>
                        <p>Opening Statement</p>
                    </div>
                    <div className="scheduleEvent">
                        <p>11:15am - 11:30am</p>
                        <p>Title Sequence</p>
                    </div>
                    <div className="scheduleEvent">
                        <p>11:30am - 12:30pm</p>
                        <p>Lunch Break</p>
                    </div>
                    <div className="scheduleEvent">
                        <p>12:30pm - 1:45pm</p>
                        <p>The Influence of Online Communities Panel</p>
                    </div>
                    <div className="scheduleEvent">
                        <p>1:45pm - 2:45pm</p>
                        <p>Workshop</p>
                    </div>
                    <div className="scheduleEvent">
                        <p>2:45pm - 4:00pm</p>
                        <p>Alumni Panel</p>
                    </div>
                </div>
                <div className="scheduleImage"></div>
            </div>
            <div className="scheduleRow container">
            <div className="scheduleImage"></div>
                <div className="scheduleContent cRight ">
                    <h2>Day 2</h2>
                    <h3>Friday, March 19th</h3>
                    <div className="scheduleEvent">
                        <p>11:00am - 1:00pm</p>
                        <p>Portfolio Reviews</p>
                    </div>
                    <div className="scheduleEvent">
                        <p>1:00pm - 2:00pm</p>
                        <p>Lunch Break</p>
                    </div>
                    <div className="scheduleEvent">
                        <p>2:00pm - 3:15pm</p>
                        <p>Design for Social Justice Panel</p>
                    </div>
                    <div className="scheduleEvent">
                        <p>3:15pm - 5:00pm</p>
                        <p>Student Showcase</p>
                    </div>
                </div>
            </div>
            <div className="scheduleRow container">
                <div className="scheduleContent">
                    <h2>Day 3</h2>
                    <h3>Saturday, March 20th</h3>
                    <div className="scheduleEvent">
                        <p>11:00am - 12:15am</p>
                        <p>Innovation within the Remote Experience Panel</p>
                    </div>
                    <div className="scheduleEvent">
                        <p>12:15am - 1:15pm</p>
                        <p>Lunch Break</p>
                    </div>
                    <div className="scheduleEvent">
                        <p>1:30pm - 3:30pm</p>
                        <p>Portfolio Reviews</p>
                    </div>
                    <div className="scheduleEvent">
                        <p>3:30pm - 4:30pm</p>
                        <p>Keynote Speaker</p>
                    </div>
                </div>
                <div className="scheduleImage"></div>
            </div>

        </main>
    )
}



export default Schedule
