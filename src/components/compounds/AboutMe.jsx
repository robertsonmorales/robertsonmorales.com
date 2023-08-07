import React from 'react';

const AboutMe = () => {
  return (
    <section id="about-me" className="py-5">
      <div className="container">
        <div className="row no-gutters flex-column flex-md-row-reverse border-radius">
          <div className="col d-flex align-items-start justify-content-center flex-column">
            <div className="text-section">A BIT ABOUT ME</div>
            <h2 className="mb-3 text-highlight">Robertson Morales &#128075;</h2>
            <p className="a-bit-about-me">
              I am a Web developer and Designer with over 3+ years of experience. I love my job and I am passionate about using my skills to create beautiful and functional websites that meet the needs of my clients.
            </p>
            <p className="a-bit-about-me">
              In my free time, I enjoy watching anime, reading articles, and playing with my pets. I am also a big fan of technology and I love learning new things. I am always looking for new ways to use technology to improve my life and the lives of others.
            </p>

            <div className="mb-3"></div>

            <div className="d-none d-md-block">
              <a
                className="btn btn-outline-primary btn-download-resume"
                target="_blank"
                href="resources/attachment/resume.pdf"
              >
                <div className="d-flex align-items-center">
                  <span className="mr-2">View Resume</span>
                  <em data-feather="external-link" className="font-size-sm"></em>
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
                    src="resources/images/me/half.png"
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
};

export default AboutMe;
