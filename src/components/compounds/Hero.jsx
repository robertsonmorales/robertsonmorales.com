import React from "react";

import ButtonNavigation  from '../atoms/ButtonNavigation';
import Profile from "../../images/me/me-saturated.webp";

function Hero() {
    return (
        <section id="hero" className="screen-height">
            <div className="row no-gutters container">
                <div className="col flexbox-center flex-column">
                    <div className="text-left">
                        <h1 className="display-3 font-stack-1 mb-3">Your Rockstar <br />Web Developer <br />and <em className="text-primary">Designer</em>.</h1>
                        <p className="h5 font-weight-normal mb-3 mb-md-4">Unlocking small and medium business potential through digital transformation.</p>
    
                        <div className="call-to-actions">
                            <ButtonNavigation selector="btn btn-primary mb-1 mb-md-0 mr-2 mobile-w-100"
                                id="nav-services"
                                text="My Services"
                            />
    
                            <div className="d-block d-md-none w-100"></div>

                            <ButtonNavigation selector="btn btn-outline-primary mobile-w-100"
                                id="nav-works"
                                text="See My Work &#8594;"
                            />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="hero-img-wrapper">
                        <img src={ Profile } alt="" className="img-fluid" />
                    </div>
                </div>
            </div>

            <lottie-player 
                src="https://assets9.lottiefiles.com/packages/lf20_JMhjmh.json"
                background="transparent" 
                speed="0.5"  
                className="d-none d-md-block mouse-scroll"
                loop  
                autoplay></lottie-player>
        </section>
    )
}

export default Hero;