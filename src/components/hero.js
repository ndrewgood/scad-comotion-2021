import React, { useEffect, createRef } from "react";
import lottie from "lottie-web";

import logoAnimation from "../assets/svg/logoData.json";


import '../styles/hero.scss'

const Hero = () => {
    let animationContainer = createRef();

    useEffect(() => {
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
            <div className="heroContainer">
                <div className="heroLogo" ref={animationContainer} />
            </div>
            <div className="heroBackgroundFade"></div>
            <div className="heroBackground"></div>
        </main>
    )
}



export default Hero

