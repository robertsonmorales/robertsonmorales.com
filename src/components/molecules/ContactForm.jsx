import React from 'react';
import { useForm } from 'react-hook-form';

import FeatherIcon from "feather-icons-react";
import SocialMediaLinks from "../../data/social-media";
import MyServices from "../../data/services";

const defaultValues = {
    first_name: '',
    last_name: '',
    email_address: '',
    phone_number: '',
    services: [],
    message: '',
}

const FORMSPARK_ACTION_URL = "https://submit-form.com/Ltadbnal";

function ContactForm({ onShowModal }) {    
    // * handles the form validations
    const {
        register,
        handleSubmit, 
        formState: { errors }
    } = useForm({ defaultValues });

    const onSubmit = async (data, e) => {
        e.preventDefault();

        let body = JSON.stringify({
            "First Name": data.first_name,
            "Last Name": data.last_name,
            "Email Address": data.email_address,
            "Phone Number": data.phone_number,
            "Services": data.services.join(", "),
            "Message": data.message
        });

        const response = await fetch(FORMSPARK_ACTION_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }, body
        });

        if(response.ok){
            onShowModal({
                show: true,
                isSent: true
            }); // * triggers an Event
        }else{
            onShowModal({
                show: true,
                isSent: false
            }); // * triggers an Event
        }
    }
    
    // * Renders the social media buttons
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

    // * Renders the offered services
    const offeredServices = MyServices.map((service, index) => {
        return (
            <label className="custom-control custom-checkbox" 
                key={ index } >
                <input type="checkbox" 
                    name="services[]" 
                    className="custom-control-input" 
                    value={ service.title }
                    { ...register("services") } />
                <span className="custom-control-label" htmlFor={ service.id }>{ service.title }</span>
            </label>            
        );
    });

    return (
        <form
            onSubmit={ handleSubmit(onSubmit) }
            className="p-4 p-lg-5">
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
                        <input type="text"
                            id="first_name"
                            name="first_name"
                            className={`form-control ${errors.first_name && 'is-invalid'}`}
                            autoComplete="off"
                            { ...register("first_name", {
                                required: 'Your first name is required.'
                            }) } />
                        { errors.first_name && 
                            <span className="invalid-feedback">{ errors.first_name.message }</span>
                        }
                    </div>
                </div>

                <div className="col">
                    <div className="input-group">
                        <label htmlFor="last_name">Last Name <span className="text-danger">*</span></label>
                        <input type="text"
                            id="last_name"
                            name="last_name"
                            className={`form-control ${errors.last_name && 'is-invalid'}`}
                            autoComplete="off"
                            { ...register("last_name", {
                                required: 'Your last name is required.'
                            }) } />
                        { errors.last_name && 
                            <span className="invalid-feedback">{ errors.last_name.message }</span>
                        }
                    </div>
                </div>
            </div>

            <div className="row flex-column flex-lg-row">
                <div className="col">
                    <div className="input-group">
                        <label htmlFor="email_address">Email Address <span className="text-danger">*</span></label>
                        <input type="text" 
                            id="email_address"
                            name="email_address"
                            className={`form-control ${errors.email_address && 'is-invalid'}`}
                            autoComplete="off"
                            { ...register("email_address", {
                                required: 'Your email address is required.'
                            }) } />
                        { errors.email_address && 
                            <span className="invalid-feedback">{ errors.email_address.message }</span>
                        }
                    </div>
                </div>
                <div className="col">
                    <div className="input-group">
                        <label htmlFor="phone_number">Phone Number <span className="text-danger">*</span></label>
                        <input type="text"
                            id="phone_number"
                            name="phone_number"
                            className={`form-control ${errors.phone_number && 'is-invalid'}`}
                            autoComplete="off"
                            { ...register("phone_number", {
                                required: 'Your phone number is required.'
                            }) } />
                        { errors.phone_number && 
                            <span className="invalid-feedback">{ errors.phone_number.message }</span>
                        }
                    </div>
                </div>
            </div>

            <div className="input-group">
                <div>What do you want me to do?</div>
                <div id="offered-services">{ offeredServices }</div>
                { errors.services && <span className="invalid-feedback">Please select at least one.</span> }
            </div>

            <div className="input-group">
                <label htmlFor="message">Message <span className="text-danger">*</span></label>
                <textarea name="message" 
                    id="message" 
                    cols="30" 
                    rows="3" 
                    className={`form-control ${errors.message && 'is-invalid'}`} 
                    autoComplete="off"
                    {...register("message", {
                        required: 'Your message is required.'
                    })}></textarea>
                { errors.message && 
                    <span className="invalid-feedback">{ errors.message.message }</span>
                }
            </div>

            <div className="flexbox-start">
                <button className="btn btn-primary" type="submit">Send Message</button>
            </div>
        </form>
    )
}

export default ContactForm;