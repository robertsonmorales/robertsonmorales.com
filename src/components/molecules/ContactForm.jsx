import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import FeatherIcon from "feather-icons-react";
import SocialMediaLinks from "../../data/social-media";
import MyServices from "../../data/services";

function ContactForm() {
    const formURL = "https://submit-form.com/jB4EPKoR";
    const {
        register,
        handleSubmit,
        watch, 
        formState: { errors }
    } = useForm();

    
    const socialMediaLinks = SocialMediaLinks.map((media, index) => {
        return (
          <a
            href={ media.url }
            target="_blank"
            title={ media.title }
            rel="noopener noreferrer"
            className="btn-socmedia"
            key={ index }
          >
            <FeatherIcon className="icon-wrapper" icon={ media.icon } />
          </a>
        );
    });

    const offeredServices = MyServices.map((service, index) => {
        return (
            <label class="custom-control custom-checkbox" key={ index }>
                <input type="checkbox" 
                    name="services[]" 
                    class="custom-control-input" 
                    id={ service.id } 
                    value={ service.title } />
                <span class="custom-control-label" for={ service.id }>{ service.title }</span>
            </label>            
        );
    });

    return (
        <FormProvider>
            <form
                action={ formURL }
                method="POST"
                id="contact-form"
                className="p-4 p-lg-5"
                >
                <div className="w-100">
                    <h4>Work With Me!</h4>
                    <p className="text-muted">Fill up the form and I will get back to you within 24 hours. Thank you!</p>
                </div>

                <div className="contact-information my-4">
                    <div className="flexbox-start">{ socialMediaLinks }</div>
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
                    <label htmlFor="subject">What do you want me to do? <span class="text-danger">*</span></label>
                    <div id="offered-services">{ offeredServices }</div>
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
        </FormProvider>
    )
}

export default ContactForm;