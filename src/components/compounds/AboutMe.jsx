import React, { useRef, useEffect } from 'react';
import FeatherIcon from "feather-icons-react";
import MyProfile from "../../data/about-me";
import { onScrollReveal } from '../../helper/scroll-reveal';

function AboutMe() {
  const header = useRef();
  const description = useRef();
  const viewResume = useRef();
  const myProfilePic = useRef();

  useEffect(() => {
    onScrollReveal(header.current, {
      delay: 100,
      distance: '5%',
      origin: 'top',
      easing: 'ease'
    });
    
    onScrollReveal(description.current, {
      delay: 200,
      distance: '5%',
      origin: 'right',
      easing: 'ease'
    });
    
    onScrollReveal(viewResume.current, {
      delay: 300,
      distance: '5%',
      origin: 'bottom',
      easing: 'ease'
    });

    onScrollReveal(myProfilePic.current, {
      delay: 200,
      distance: '10%',
      origin: 'left',
      easing: 'ease'
    });

  });

  const aboutMe = MyProfile.about_me.map((about, index) => <p className="a-bit-about-me" key={ index } ref={ description }>{ about }</p>);

  return (
    <section id="aboutme" className="py-5">
      <div className="container">
        <div className="row no-gutters flex-column flex-md-row-reverse border-radius">
          <div className="col d-flex align-items-start justify-content-center flex-column">
            <h2 className="mb-3 text-highlight" ref={ header }>A bit about me</h2>

            { aboutMe }

            <div className="mb-3"></div>

            <div className="d-none d-md-block">
              <a
                className="btn btn-outline-primary btn-download-resume"
                target="_blank"
                rel='noopener noreferrer'
                ref={ viewResume }
                href={ MyProfile.resume }
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
                    ref={ myProfilePic }
                    className="img-fluid"
                    src={ MyProfile.profile }
                    width="500"
                    height="500"
                    alt={ MyProfile.name }
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
};

export default AboutMe;
