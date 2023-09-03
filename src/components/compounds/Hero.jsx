import React from "react";

import ButtonNavigation  from '../atoms/ButtonNavigation';
import Profile from "../../images/me/me-saturated.webp";

function Hero() {
    return (
        <section id="hero" className="screen-height">
            <div className="row no-gutters container flex-column-reverse flex-md-row">
                <div className="col d-flex justify-content-center align-items-start flex-column">
                    <div className="text-center text-md-left">
                        <h1 className="mb-3">Your rockstar <br />web developer <br />and <span className="text-primary">designer</span>.</h1>
                        <p className="mb-3 mb-md-4">Unlocking small and medium business potential <br />through digital transformation.</p>
    
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
                    <div className="mb-2 mb-md-0">
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