import React from "react"

import '../styles/faq.scss'

const Faq = () => {

    return(
        <main className="faqMain">
            <div className="divider3"></div>
            <h1>FAQ</h1>
            <div className="faqContainer container">
                <div className="faq">
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
                </div>
            </div>
        </main>
    )
}



export default Faq
