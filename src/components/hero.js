import React, { useEffect, createRef, useState } from "react";
import lottie from "lottie-web";
import countdown from 'countdown';
import logoAnimation from "../assets/svg/logoData.json";


import '../styles/hero.scss'

const Hero = () => {
    let animationContainer = createRef();

    const [cd, setCD] = useState(countdown( new Date('March 18, 2021 11:00:00'), null, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS ))

    useEffect(() => {
        setInterval(() => {
            setCD(countdown( new Date('March 18, 2021 11:00:00'), null, countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS ));
            console.log(cd);
        }, 1000);

        const anim = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: logoAnimation
        });
        return () => anim.destroy(); // optional clean up for unmounting
      }, []);

    return(
        <main className="heroMain">
            <div className="countdown">
                <p>{cd.days + " days, " + cd.hours + " hours, " + cd.minutes + " minutes, and " + cd.seconds + " seconds until CoMotion 2021!" }</p>
            </div>
            <div className="heroContainer">
                <div className="heroLogo" ref={animationContainer} />
            </div>
            <div className="heroBackgroundFade"></div>
            <div className="heroBackground"></div>
        </main>
    )
}



export default Hero

