import React from 'react';

import MyProfile from "../../data/about-me";
import FeatherIcon from "feather-icons-react";

class AboutMe extends React.Component {
  constructor(props){
    super(props);
    this.state = MyProfile;
  }

  renderAboutMe(){
    let aboutMe = this.state.about_me.map( (about, index) => {
      return (
        <p className="a-bit-about-me" key={ index }>{ about }</p>
      )
    });

    return aboutMe;
  }

  render() {
    return (
      <section id="aboutme" className="py-5">
        <div className="container">
          <div className="row no-gutters flex-column flex-md-row-reverse border-radius">
            <div className="col d-flex align-items-start justify-content-center flex-column">
              {/* <div className="mb-3 text-section">A bit about me</div> */}
              <h1 className="mb-3 text-highlight">A bit about me</h1>

              { this.renderAboutMe() }
  
              <div className="mb-3"></div>
  
              <div className="d-none d-md-block">
                <a
                  className="btn btn-outline-primary btn-download-resume"
                  target="_blank"
                  rel='noopener noreferrer'
                  href={ this.state.resume }
                >
                  <div className="d-flex align-items-center">
                    <FeatherIcon icon="external-link" />
                    <span className="ml-2 mr-2">View Resume</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col">
              <div className="about-radius">
                <div className="mb-3 mb-md-0">
                  <div className="flexbox-center overflow-hidden">
                    <img
                      className="img-fluid"
                      src={this.state.profile}
                      width="500"
                      height="500"
                      alt="Robertson Morales"
                      id='avatar'
                      loading='lazy'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default AboutMe;
