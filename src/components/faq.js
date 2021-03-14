import React from "react"

import '../styles/faq.scss'

const Faq = () => {

    return(
        <main className="faqMain">
            <div className="divider3"></div>
            <h1>FAQ</h1>
            <div className="faqContainer container">
                <div className="faq">
                    <h3>Is CoMotion going to be held virtually this year?</h3>
                    <p>Yes! CoMotion 2021 will be the first all-virtual CoMotion. Everything will be accessible from our website, scadcomotion.com.</p>
                </div>
                <div className="faq">
                    <h3>When and Where are my Portfolio Reviews? With whom am I reviewing?</h3>
                    <p>Everyone who was selected for the virtual Portfolio Reviews during CoMotion 2021 should have received an email from MOMELove with the subject line: "CoMotion 2021 Portfolio Review." This email will have your review schedule as well as helpful information regarding the review process.</p>
                </div>
                <div className="faq">
                    <h3>How will the virtual Portfolio Reviews work during CoMotion 2021?</h3>
                    <p>Portfolio reviews will be conducted via the CoMotion 2021 Discord server that attendees can access from their itinerary email and students can access through the MOMELove Club Discord.
                       <br /><br />
                       Attendees are asked to hang out in their respective Voice Chats for the portion of the day dedicated to portfolio reviews, whereas students will come in and out of those rooms.
                       Our volunteers will be posting announcements in the <bold>#time</bold> channel 5 minutes before each review time is over, and will enter the Voice Channel at the end of each review to check in.
                       Our server can handle everyone screensharing, but we recommend having the student’s website pulled up on their end to share their screen.
                    </p>
                </div>
                <div className="faq">
                    <h3>Why are we using Discord for the CoMotion 2021 Portfolio Reviews?</h3>
                    <p>We are aware that Discord may be a brand new platform to use besides Zoom or Slack, however, due to the capabilities of remote officers and volunteers, Discord’s large-group setting with the ability to break into smaller sections and general accessibility is the best option for overseeing portfolio reviews.</p>
                </div>
                <div className="faq">
                    <h3>How can I attend the virtual CoMotion 2021 panels and events?</h3>
                    <p>All of our events will be accessed through our scadcomotion.com website’s "Livestream" page. These streams will be hosted through YouTube.</p>
                </div>
                <div className="faq">
                    <h3>Do I need to set up an account?</h3>
                    <p>No account needed to watch our streams! However, you will need a YouTube account in order to comment in the Livestream’s chat box to ask questions during our Q+A.</p>
                </div>
                {/* <div className="faq">
                    <h3>What are Portfolio Reviews?</h3>
                    <p>Many of our company attendees have signed up to participate in portfolio reviews with students - these will be 15 minutes, one-on-one meetings with said companies as an opportunity to showcase your work, get direct feedback, and network with industry professionals.</p>
                </div>
                <div className="faq">
                    <h3>What is the Student Showcase?</h3>
                    <p>The Student Showcase is one of the major events of CoMotion. Students are invited to submit their work to be nominated by our professors, showcased in a live show at CoMotion, and then voted on by our company attendees for best in their category.</p>
                </div>
                <div className="faq">
                    <h3>How do panels work? How do I attend?</h3>
                    <p>Panels this year will function in the same way they have in the past - a panel of company attendees will have a platform to discuss the topic at hand, moderated by a SCAD MOME professor. The panelists will have time to discuss amongst themselves, and we will open up to a Q+A at the end of the panel discussion.</p>
                </div> */}
            </div>
        </main>
    )
}



export default Faq
