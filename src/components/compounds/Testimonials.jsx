import React from 'react';

import Subheadline from "../atoms/Subheadline";
import QuoteIcon from "../../images/quote.svg";
import ClientTestimonials from "../../data/testimonials";

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = { testimonials: ClientTestimonials };
  }

  renderItem() {
    let item = this.state.testimonials.map(testimonial => {
      return (
        <div className={`carousel-item ${testimonial.isActive && 'active' }`} 
          key={ testimonial.id }>
          <div className="py-5 px-0 p-md-5">
            <div className="testimonial-header flexbox-center">
              <div className="testimonial-icon bg-primary mb-4">
                <img src={QuoteIcon} alt="feedback-icon" width="80" />
              </div>
            </div>
            <div className="text-center font-weight-normal text-muted">
              <p className="testimonial-quote mb-4" dangerouslySetInnerHTML={{ __html: testimonial.feedback}} />
              <p>
                <a
                  href={ testimonial.postUrl }
                  title="See Post"
                  className="font-weight-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >{ testimonial.client }</a>
                <span>{ (testimonial.title != null) ? ', ' + testimonial.title : '' }</span>
              </p>
            </div>
          </div>
        </div>
      )
    });

    return item;
  }

  render() {
    return (
      <section id="testimonials" className="py-5">
        <div className="container">
          <Subheadline 
            section="Testimonials" 
            label="What my clients' say.." />

          <div id="carouselTestimonials" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">{ this.renderItem() }</div>

            {/* TODO: Fix this */}
            <ol className="carousel-indicators">
              <li data-target="#carouselTestimonials" data-slide-to="0" className="active"></li>
              <li data-target="#carouselTestimonials" data-slide-to="1"></li>
              <li data-target="#carouselTestimonials" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
