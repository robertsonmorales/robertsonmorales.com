import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    return (
      <section id="testimonials" className="py-5">
        <div className="container">
          <div className="text-center">
            <div className="text-section">TESTIMONIALS</div>
            <h2 className="text-highlight">What my clients say..</h2>
          </div>

          <div id="carouselTestimonials" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="py-5 px-0 p-md-5">
                  <div className="testimonial-header flexbox-center">
                    <div className="testimonial-icon bg-primary mb-4">
                      <img src="/resources/images/quote.png" alt="feedback-icon" width="80" />
                    </div>
                  </div>
                  <div className="text-center font-weight-normal text-muted">
                    <p className="testimonial-quote mb-4">
                      Robertson is <span className="testimonial--highlight">an amazing full stack developer that delivered exactly what was needed</span>. In fact, he went above and beyond what is expected. He is easy to work with and very responsive. I can’t speak highly enough of his skills and strong work ethic. I’ve worked with him for several projects and surely will get him again for my future ones. Hire him, you will not be disappointed! 👌
                    </p>
                    <p>
                      <a
                        href="https://www.facebook.com/krizia.carriaga/posts/10159552643280376"
                        title="See Post"
                        className="font-weight-500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Krizia Carriaga Tenorio
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="py-5 px-0 p-md-5">
                  <div className="testimonial-header flexbox-center">
                    <div className="testimonial-icon bg-primary mb-4">
                      <img src="/resources/images/quote.png" alt="feedback-icon" width="60" />
                    </div>
                  </div>
                  <div className="text-center font-weight-normal text-muted">
                    <h3 className="testimonial-quote mb-4">
                      <span className="testimonial--highlight">Very attentive, responsive and professional</span>,
                      <br /> would definitely recommend Robert to anyone.
                    </h3>
                    <p>
                      <a
                        href="https://www.facebook.com/haidar.maliki.146/posts/961460288589621"
                        title="See Post"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Haidar Maliki
                      </a>
                      <span className="text-muted">, Managing Director of Viewcon Building Group</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ol className="carousel-indicators">
              <li data-target="#carouselTestimonials" data-slide-to="0" className="active"></li>
              <li data-target="#carouselTestimonials" data-slide-to="1"></li>
            </ol>
            {/* Uncomment the following carousel controls if needed */}
            {/* <button className="carousel-control-prev" type="button" data-target="#carouselTestimonials" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselTestimonials" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </button> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
