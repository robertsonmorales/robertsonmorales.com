import React from 'react';

import FeatherIcon from "feather-icons-react";
import Subheadline from "../atoms/Subheadline";

const socmed = [
  {
    url: 'https://www.facebook.com/robertsonmorales.dev',
    title: 'Follow me on Facebook',
    icon: 'facebook'
  },
  {
    url: 'https://www.instagram.com/robertson.morales',
    title: 'Follow me on Instagram',
    icon: 'instagram'
  },
  {
    url: 'https://www.linkedin.com/in/robertson-morales',
    title: 'Connect with me on LinkedIn',
    icon: 'linkedin'
  },
  {
    url: 'https://dribbble.com/robertsonmorales',
    title: 'Follow me on Dribbble',
    icon: 'dribbble'
  },
];

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form_action: 'https://submit-form.com/jB4EPKoR',
      socmed
    }
  }

  renderSocialMedia() {
    let socialMedia = this.state.socmed.map((media, index) => {
      return (
        <a
          href={ media.url}
          target="_blank"
          title={ media.title}
          rel="noopener noreferrer"
          className="btn-socmedia"
          key={ index }
        >
          <FeatherIcon className="icon-wrapper" icon={ media.icon } />
        </a>
      )
    });

    return socialMedia;

  }

  render() {
    return (
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <Subheadline 
            section="Contacts" 
            label="Get in touch and <br> let's work together." />

          <div className="row no-gutters contact-card flex-column flex-lg-row overflow-hidden">
            <div className="col col-lg-5 background-img border-radius"></div>
            <div className="col col-lg-7">
              <form
                action={ this.state.form_action }
                method="POST"
                id="contact-form"
                className="p-4 p-lg-5"
              >
                <div className="w-100">
                  <h4>Work With Me!</h4>
                  <p className="text-muted">Fill up the form and I will get back to you within 24 hours. Thank you!</p>
                </div>

                <div className="contact-information my-4">
                  <div className="flexbox-start">{ this.renderSocialMedia() }</div>
                </div>

                <div className="row flex-column flex-lg-row">
                  <div className="col">
                    <div className="input-group">
                      <label htmlFor="first_name">First Name <span className="text-danger">*</span></label>
                      <input type="text" name="first_name" id="first_name" className="form-control" autoComplete="off" />
                      <span className="invalid-feedback" id="validate-first_name"></span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="input-group">
                      <label htmlFor="last_name">Last Name <span className="text-danger">*</span></label>
                      <input type="text" name="last_name" id="last_name" className="form-control" autoComplete="off" />
                      <span className="invalid-feedback" id="validate-last_name"></span>
                    </div>
                  </div>
                </div>

                <div className="row flex-column flex-lg-row">
                  <div className="col">
                    <div className="input-group">
                      <label htmlFor="email_address">Email Address <span className="text-danger">*</span></label>
                      <input type="email" name="email_address" id="email_address" className="form-control" autoComplete="off" />
                      <span className="invalid-feedback" id="validate-email_address"></span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="input-group">
                      <label htmlFor="phone_number">Mobile No. <span className="text-danger">*</span></label>
                      <input type="text" name="phone_number" id="phone_number" className="form-control" autoComplete="off" />
                      <span className="invalid-feedback" id="validate-phone_number"></span>
                    </div>
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="subject">What do you want me to do?</label>
                  <div id="offered-services"></div>
                  <span className="invalid-feedback" id="validate-subject"></span>
                </div>

                <div className="input-group">
                  <label htmlFor="message">Message <span className="text-danger">*</span></label>
                  <textarea name="message" id="message" cols="30" rows="3" className="form-control" autoComplete="off"></textarea>
                  <span className="invalid-feedback" id="validate-message"></span>
                </div>

                <div className="flexbox-start">
                  <button className="btn btn-primary w-100" id="btn-submit" type="button">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
