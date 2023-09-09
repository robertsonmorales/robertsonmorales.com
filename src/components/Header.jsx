import React, { useRef, useEffect } from 'react';
import FeatherIcon from 'feather-icons-react';

function Header() {
    const navbar = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            navbar.current.classList.toggle('border-bottom', window.scrollY > navbar.current.offsetHeight);
            navbar.current.classList.toggle('glassmorphism', window.scrollY > navbar.current.offsetHeight);
        });
    });

    const removeActiveClass = () => {
        let navs = document.querySelectorAll('.nav-link.navbar');

        navs.forEach(nav => {
            document.getElementById(nav.id).classList.remove('active');
        });
    }

    const triggerClick = (id) => {
        removeActiveClass(); // remove .active class

        let el = document.getElementById(id);
        if (id === 'hero') {
            document.getElementById('nav-hero').classList.add('active');
            window.scrollTo(0,0);
        }else{
            document.getElementById(`nav-${id}`).classList.add('active');
            el.scrollIntoView();
        }
    }

    return (
        <header className='fixed-top'>
            <nav
                className="navbar navbar-expand-md navbar-light"
                id="navbar"
                ref={ navbar }
            >
                <div className="container from-nav mx-3 mx-md-auto">
                    <a href="/"
                        className="navbar-brand border-0 bg-transparent outline-none" >
                        <div className="h5 mb-0 font-weight-600 font-stack-1">Robertson M<span className='text-primary'>.</span></div>
                    </a>

                    <button
                        className="navbar-toggler border-0 outline-none"
                        type="button"
                        data-toggle="collapse"
                        data-target="#toggleNavbar"
                        aria-controls="toggleNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <FeatherIcon icon="menu"></FeatherIcon>
                    </button>

                    <div className="navbar-collapse collapse text-center" id="toggleNavbar">
                        <ul className="navbar-nav mr-auto"></ul>

                        <div className="navbar-text">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 gap-y-base">
                                <li className="nav-item">
                                    <button type="button" 
                                        id="nav-hero" 
                                        className="nav-link navbar active" 
                                        onClick={ () => triggerClick('hero') }>Home</button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" 
                                        id="nav-services" 
                                        className="nav-link navbar" 
                                        onClick={ () => triggerClick('services') }>Services</button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" 
                                        id="nav-works" 
                                        className="nav-link navbar" 
                                        onClick={ () => triggerClick('works') }>Work</button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" 
                                        id="nav-aboutme" 
                                        className="nav-link navbar" 
                                        onClick={ () => triggerClick('aboutme') }>About Me</button>
                                </li>
                                <li className="nav-item">
                                    <a href="https://drive.google.com/file/d/1-vFOfIOTjQcMeo3F4vxntRpN2mp65MqT/view?usp=sharing"
                                        className="nav-link navbar"
                                        target="_blank"
                                        rel='noopener noreferrer'
                                        id="nav-download"
                                    >
                                        <span className="mr-2">Resume</span>
                                        <FeatherIcon icon="external-link"></FeatherIcon>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <button type="button" 
                                        id="nav-testimonials" 
                                        className="nav-link navbar" 
                                        onClick={ () => triggerClick('testimonials') }>Testimonials</button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" 
                                        id="nav-contact" 
                                        className="nav-link navbar" 
                                        onClick={ () => triggerClick('contact') }>Contacts</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header