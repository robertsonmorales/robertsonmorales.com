import React, { useRef, useEffect } from "react";
import { onScrollReveal } from "../../helper/scroll-reveal";

import Profile from "../../images/me/me-saturated.webp";

function Hero() {
    const headline = useRef(null);
    const subheadline = useRef(null);
    const profile = useRef(null);

    useEffect(() => {
        onScrollReveal(headline.current, {
            delay: 300,
            distance: '5%',
            origin: 'right',
            easing: 'ease'
        });

        onScrollReveal(subheadline.current, {
            delay: 400,
            distance: '5%',
            origin: 'right',
            easing: 'ease'
        });
        
        onScrollReveal(profile.current, {
            delay: 500,
            distance: '5%',
            origin: 'left',
            easing: 'ease'
        });
        
        onScrollReveal('#nav-services', {
            delay: 500,
            distance: '15%',
            origin: 'bottom',
            easing: 'ease'
        });
        
        onScrollReveal('#nav-works', {
            delay: 600,
            distance: '10%',
            origin: 'bottom',
            easing: 'ease'
        });

    }, []);

    return (
        <section id="hero" className="screen-height">
            <div className="row no-gutters container flex-column-reverse flex-md-row">
                <div className="col d-flex justify-content-center align-items-start flex-column">
                    <div className="text-center text-md-left">
                        <h1 className="mb-3" ref={ headline }>Your rockstar <br />web developer <br />and <span className="text-primary">designer</span>.</h1>
                        <p className="mb-3 mb-md-4" ref={ subheadline }>Unlocking small and medium business potential <br />through digital transformation.</p>
    
                        <div className="call-to-actions">
                            <button type="button" 
                                id="nav-services" 
                                className="btn btn-primary mb-1 mb-md-0 mr-2 mobile-w-100">My Services</button>
    
                            <div className="d-block d-md-none w-100"></div>

                            <button type="button" 
                                id="nav-works" 
                                className="btn btn-outline-primary mobile-w-100 ml-2">See My Work &#8594;</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="mb-2 mb-md-0">
                        <img src={ Profile } 
                            ref={ profile } 
                            alt="Robertson Morales" 
                            className="img-fluid" />
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