import React from 'react';

import Subheadline from "../atoms/Subheadline";
import ContactForm from "../molecules/ContactForm";

function Contact () {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <Subheadline 
          section="Contacts" 
          label="Get in touch and <br> let's work together." />

        <div className="row no-gutters contact-card flex-column flex-lg-row overflow-hidden">
          <div className="col col-lg-5 background-img border-radius"></div>
          <div className="col col-lg-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
