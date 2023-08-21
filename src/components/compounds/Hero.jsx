import React from "react";

import Button  from '../atoms/Button';

class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.navigateTo = this.navigateTo.bind(this);
    }

    navigateTo(){
        alert('nav')
    }

    render(){
        return (
            <section id="hero" className="screen-height">
                <div className="container">
                    <div className="d-flex align-items-center flex-column justify-content-center">
                        <div className="text-left text-md-center">
                            <div className="display-1 mb-3 md-md-4" id="intro">Hi! I'm Robertson,
                                <br />Web <span className="text-primary">Developer</span> & <span className="text-primary">Designer</span>.
                            </div>
        
                            <h5 className="text-muted font-weight-normal mb-3 mb-md-4" id="specialize">Unleashing Business Potential in the Digital Era through Web Development & Design</h5>
        
                            <div className="call-to-actions">
                                <Button selector="btn btn-primary mb-1 mb-md-0 mr-2 mobile-w-100"
                                    id="btn-my-services"
                                    text="My Services"
                                    onClick={ () => this.navigateTo }
                                />
        
                                <div className="d-block d-md-none w-100"></div>

                                <Button selector="btn btn-outline-primary mobile-w-100"
                                    id="btn-my-works"
                                    text="See My Work &#8594;"
                                    onClick={ () => this.navigateTo }
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