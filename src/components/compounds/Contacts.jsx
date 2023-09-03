import React, { useState } from 'react';

import Subheadline from "../atoms/Subheadline";
import Modal from "../atoms/Modal";
import ContactForm from "../molecules/ContactForm";

function Contact () {
  const [showModal, setShowModal] = useState({});

  // * Modal dialog handler
  const modalHandler = ({ show, isSent }) => {
    setShowModal({
      show, 
      isSent
    });
  }

  // const onCloseHandler = (isClose) => {
  //   setShowModal(isClose);
  // }

  return (
    <>
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <Subheadline 
            section="Contacts" 
            label="Get in touch and <br> let's work together." />

          <div className="row no-gutters contact-card flex-column flex-lg-row overflow-hidden">
            <div className="col col-lg-5 background-img inner-border-radius"></div>
            <div className="col col-lg-7">
              <ContactForm onShowModal={ modalHandler } />
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Sending a message */}
      <Modal behavior={ showModal }
      />
    </>
  );
}

export default Contact;
