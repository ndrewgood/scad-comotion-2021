import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import moment from 'moment'

import "../styles/livestream.scss"
 
const LivestreamPage = () => {

  let timeNow;

  let time2 = 1616012460;
  let time3 = 1616012520;

  //Fri Mar 19 2021 00:00:00 GMT-0400 (Eastern Daylight Time)
  let timeFriday = 1616126400;

  //Sat Mar 20 2021 00:00:00 GMT-0400 (Eastern Daylight Time)
  let timeSaturday = 1616212800;

  const [pageStatus, setPageStatus] = useState();

  const titles = [
    "CoMotion Livestream: Day 1",
    "CoMotion Livestream: Day 2",
    "CoMotion Livestream: Day 3"
  ]

  const links = [
    "https://www.youtube.com/embed/Pn2Y2mNEkjU?autoplay=1",
    "https://www.youtube.com/embed/nJaWaUUTb-U?autoplay=1",
    "https://www.youtube.com/embed/SqOWJDOdWR8?autoplay=1"
  ]

  
  useEffect(() => {
    setInterval(() => {
      timeNow = moment().format('X');
      if (timeNow >= timeSaturday) {
        setPageStatus(3);
      } else if (timeNow >= timeFriday && timeNow <= timeSaturday){
        setPageStatus(2);
      } else {
        setPageStatus(1);
      }

    }, 1000);
  }, []);

  return (
    <Layout>
    <SEO title="SCAD CoMotion 2021" />
    <main className="liveMain">
      <div className="liveContainer iframe-container">
        <h1>{pageStatus == 1 ? titles[0] : pageStatus == 2 ? titles[1] : pageStatus == 3 ? titles[2] : null}</h1>
        <iframe className="liveYoutube" autoPlay width="670" height="377" src={pageStatus == 1 ? links[0] : pageStatus == 2 ? links[1] : pageStatus == 3 ? links[2] : null} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
        <a className="sideLink" target="_blank" href="https://www.youtube.com/watch?v=C67kTTa3SH8">Student Showcase</a>
        {/* <a className="sideLink" target="_blank" href="https://www.youtube.com/watch?v=G91JW2mYi9A&list=PLitCU_9FKN6B3kLW5AwiNt3BzAljp0cBY&index=1">Opening Statement & Title Sequence</a> */}
        <div className="live-buttonContainer">
          <a className="button" target="_blank" href="https://www.youtube.com/watch?v=Pn2Y2mNEkjU&list=PLitCU_9FKN6B3kLW5AwiNt3BzAljp0cBY&index=2" >Day 1 <br/>Livestream Link</a>
          <a className="button" target="_blank" href="https://www.youtube.com/watch?v=nJaWaUUTb-U&list=PLitCU_9FKN6B3kLW5AwiNt3BzAljp0cBY&index=3" >Day 2 <br/>Livestream Link</a>
          <a className="button" target="_blank" href="https://www.youtube.com/watch?v=SqOWJDOdWR8&list=PLitCU_9FKN6B3kLW5AwiNt3BzAljp0cBY&index=4" >Day 3 <br/>Livestream Link</a>
        </div>
      </div>
      <div className="liveBackgroundFade"></div>
      <div className="liveBackground"></div>
    </main>
  </Layout>
  )
}

export default LivestreamPage
