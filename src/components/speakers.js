import React, {useState, useCallback, useEffect} from "react"

import '../styles/speakers.scss'

import lake from '../assets/png/lake4.png'
import panLogo from '../assets/svg/panLogo.svg'
import x from '../assets/svg/x.svg'

const speakerBoxInfo = [
    {
        name: "Bee Grandinetti",
        role: "Co-Founder, Panimation",
        para: "Hailing from the warm lands of Brazil, Bee Grandinetti has honed her skills across the globe. From Belo Horizonte, to São Paulo, to Stockholm, to London, she has extensive experience in crafting 2D characters full of personality and warmth. She is represented as an animation director by Hornet and also works as a designer and animator. On the side, Bee collaborates with several instutions as a teacher and mentor, and has been helping Hyper Island shape their Motion program as an educational consultant for several years.",
        website: "http://www.beegrandinetti.com/",
        insta: "https://www.instagram.com/beezilda/",
        slug: "bee"
    },
    {
        name: "Hedvig Ahlberg",
        role: "Co-Founder, Panimation",
        para: "Hedvig Ahlberg is a Swedish editor, producer & director living and working in London. She directs and produces both long and short form videos, and has edited music videos and short films for international artists and independent directors. Her own films often highlight and put emphasis on women – and her own short ‘Strength’ was nominated and awarded several prizes in its festival round.",
        website: "http://www.hedvigahlberg.com/",
        slug: "hedvig"
    },
    {
        name: "Linn Fritz",
        role: "Co-Founder, Panimation",
        para: "Swedish illustrator, designer and animator Linn Fritz lives and works in London from which she creates charmingly clean, precise imagery in a trademark pastel palette for a wide range of editorial and commercial clients. She’s represented worldwide by AGENT PEKKA and POCKO.",
        website: "http://www.linnfritz.com/",
        insta: "http://instagram.com/linnfritz",
        slug: "linn"
    }
]


const SpeakerBox = ({info, close}) => {
    return (
        <div className={"speakerBoxContainer " + info.slug}>
            <div className="speakerBoxBackground" onClick={() => close(false)}></div>
            <div className="speakerBox">
                <img className="sbX" src={x} onClick={() => close(false)}></img>
                <div className="sbLeft">
                    <h1>{info.name}</h1>
                    <h3>{info.role}</h3>
                    <p><a href={info.website} target="_blank">Website</a>{info.insta ? ", " : null}{info.insta ? <a target="_blank" href={info.insta}>Instagram</a> : null}
                    </p>
                </div>
                <div className="sbRight">
                    <p>{info.para}</p>
                </div>
            </div>
        </div>
    )
}



const Speakers = () => {

    const [speakerState, setSpeakerState] = useState(0);
    const [showState, setShowState] = useState(false);

    const handleClose = useCallback(
        () => setShowState(false),
        []
    );

    return(
        <>
            {
                showState ?
                <SpeakerBox info={speakerBoxInfo[speakerState]} close={handleClose} /> 
                : null
            }
            <main className="speakersMain">
                <div className="lakeContainer">
                    <div className="lakeContent">
                        <h1>Keynote Speakers</h1>
                        <div className="speakersContainer">
                        <div className="speaker s3">
                                <div className="sPic" onClick={() => {setSpeakerState(0); setShowState(true)}}></div>
                                <p className="sName">Bee Grandinetti</p>
                                <p className="sRole">Co-Founder, Panimation</p>
                            </div>
                            <div className="speaker s2" onClick={() => {setSpeakerState(1); setShowState(true)}}>
                                <div className="sPic"></div>
                                <p className="sName">Hedvig Ahlberg</p>
                                <p className="sRole">Co-Founder, Panimation</p>
                            </div>
                            <div className="speaker s1">
                                <div className="sPic" onClick={() => {setSpeakerState(2); setShowState(true)}}></div>
                                <p className="sName">Linn Fritz</p>
                                <p className="sRole">Co-Founder, Panimation</p>
                            </div>
                        </div>
                    </div>
                    <img src={lake} className="lake"/>
                </div>
                <div className="panContainer">
                        <a href="http://www.panimation.tv/" target="_blank">
                            <img src={panLogo} alt="" />
                        </a>
                        <p>Panimation (previously known as Punanimation) is a multi-platform community for women, trans and non-binary people working within animation and motion graphics. It was founded in February 2015, by 3 friends: Bee Grandinetti, Hedvig Ahlberg, and Linn Fritz, who were a bit tired of the industry being too much of a boy’s club and decided to do something about it.</p>
                    </div>
                    <h1 className="panelsHeader">Panels</h1>
                <div className="panelsContainer container">
                    <div className="panel">
                        <div className="info">
                            <h1>The Influence of <br />Online Communities</h1>
                            <h3>March 18th, 11:30am - 12:45pm EST</h3>
                        </div>
                        <div className="content">
                            <p>With the rise of social media platforms, online spaces have become incredibly accessible and impactful for artists of all mediums to connect, learn new skills, and share their insight with others. In this panel, we will be talking with designers who have built an online presence by sharing their talents, tips, and tricks with followers and friends online. What pressures and privileges does a social media following present?</p>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="info">
                            <h1>CoMotion Branding: <br />Behind the Scenes</h1>
                            <h3>March 18th, 2:00pm - 3:00pm EST</h3>
                        </div>
                        <div className="content">
                            <p>What does it take for a student team to develop an event brand package? On this panel, leads from the CoMotion branding team will explain the inspiration behind the initial pitch and the ways they adapted to an entirely virtual environment. Students will discuss the process behind the title sequence, the documentation of a virtual event, the creation of the CoMotion website, and the production of the overall branding package.</p>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="info">
                            <h1>Alumni Panel <br />(International Perspective)</h1>
                            <h3>March 18th, 3:15pm - 4:30pm EST</h3>
                        </div>
                        <div className="content">
                            <p>SCAD Alumni will talk about life during and after college, sharing wisdom and advice with current students. We’ll learn about the challenges they encountered, as well as their plentiful successes along their journey. Panelists will provide insights on securing the proper Visa for international employment, finding your footing in the industry, and the plethora of lessons learned along the way.</p>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="info">
                            <h1>Design for Social <br />Justice Panel</h1>
                            <h3>March 19th, 3:00pm - 4:15pm EST</h3>
                        </div>
                        <div className="content">
                            <p>In recent months, with a mainstream focus on the Black Lives Matter movement, conversations about equity and justice have become more accessible than ever, and people everywhere are looking to find ways to contribute to the conversation. In this panel, we’ll be talking to designers and animators who have pushed for positive change through their work. Panelists will provide insights on how to design for social justice, explaining how they capture diversity through their respective lenses and the lasting impact they are hoping to make through their motion design projects.</p>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="info">
                            <h1>Innovation within the <br />Remote Experience</h1>
                            <h3>March 20th, 10:00am – 11:15pm EST</h3>
                        </div>
                        <div className="content">
                            <p>While the transition to working remotely may have been more familiar to motion designers than other industries, we have still had to solve our share of problems along the way. Today, we will hear from industry professionals about the benefits they see in how in a year the world has adapted, how they have persisted throughout this change, and how they have remained connected to fellow designers, friends, and family in this virtual environment.</p>
                        </div>
                    </div>
                </div>
                {/* <div className="divider3"></div> */}
            </main>
        </>
    )
}



export default Speakers
