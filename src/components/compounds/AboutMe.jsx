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
      <section id="about-me" className="py-5">
        <div className="container">
          <div className="row no-gutters flex-column flex-md-row-reverse border-radius">
            <div className="col d-flex align-items-start justify-content-center flex-column">
              <div className="text-section">A BIT ABOUT ME</div>
              <h2 className="mb-3 text-highlight">{ this.state.name } <span role='img' aria-label='waving'>&#128075;</span></h2>

              { this.renderAboutMe() }
  
              <div className="mb-3"></div>
  
              <div className="d-none d-md-block">
                <a
                  className="btn btn-outline-primary btn-download-resume"
                  target="_blank"
                  href={ this.state.resume }
                >
                  {/* href="resources/attachment/resume.pdf" */}
                  <div className="d-flex align-items-center">
                    <span className="mr-2">View Resume</span>
                    <FeatherIcon icon="external-link" className="font-size-sm" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col">
              <div className="bg-light about-radius">
                <div className="mb-3 mb-md-0">
                  <div className="flexbox-center overflow-hidden">
                    <img
                      className="img-drop-shadow"
                      src={this.state.profile}
                      width="462"
                      height="475"
                      alt="Avatar"
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
