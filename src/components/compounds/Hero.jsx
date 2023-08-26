import React from "react";

import ButtonNavigation  from '../atoms/ButtonNavigation';

class Hero extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render(){
        return (
            <section id="hero" className="screen-height">
                <div className="container">
                    <div className="d-flex align-items-center flex-column justify-content-center">
                        <div className="text-left text-md-center">
                            <h1 className="display-3 font-stack-1 mb-3 mb-md-4" id="intro">Hi! I'm Robertson,
                                <br />Web <span className="text-primary">Developer</span> & <span className="text-primary">Designer</span>.
                            </h1>
        
                            <h5 className="h5 text-muted font-weight-normal mb-3 mb-md-4" id="specialize">Unleashing Business Potential in the Digital Era through Web Development & Design</h5>
        
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
}

export default Hero;