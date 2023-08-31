import React from 'react';
import FeatherIcon from 'feather-icons-react';
import ButtonNavigation from './atoms/ButtonNavigation';

function Header() {
    return (
        <header className='fixed-top glassmorphism'>
            <nav
                className="navbar navbar-expand-md navbar-light mobile-bg-white"
                id="navbar"
            >
                <div className="container from-nav mx-3 mx-md-auto">
                    <a href="/"
                        className="navbar-brand border-0 bg-transparent outline-none" >
                        <div className="h5 mb-0 font-weight-500 font-stack-1">RM</div>
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
                    <div className="collapse navbar-collapse" id="toggleNavbar">
                        <ul className="navbar-nav mr-auto" />
                        <div className="navbar-text">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 gap-y-base">
                                <li className="nav-item">
                                    <ButtonNavigation selector="nav-link navbar active"
                                        id="nav-hero"
                                        text="Home"
                                    />
                                </li>
                                <li className="nav-item">
                                    <ButtonNavigation selector="nav-link navbar"
                                        id="nav-services"
                                        text="Services"
                                    />
                                </li>
                                <li className="nav-item">
                                    <ButtonNavigation selector="nav-link navbar"
                                        id="nav-works"
                                        text="Work"
                                    />
                                </li>
                                <li className="nav-item">
                                    <ButtonNavigation selector="nav-link navbar"
                                        id="nav-aboutme"
                                        text="About Me"
                                    />
                                </li>
                                <li className="nav-item">
                                    <a href="https://drive.google.com/file/d/1-vFOfIOTjQcMeo3F4vxntRpN2mp65MqT/view?usp=sharing"
                                        className="nav-link navbar"
                                        target="_blank"
                                        rel='noopener noreferrer'
                                        id="nav-download"
                                    >
                                        <span className="mr-2">Resume</span>
                                        <FeatherIcon icon="external-link" size="{28}"></FeatherIcon>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <ButtonNavigation selector="nav-link navbar"
                                        id="nav-testimonials"
                                        text="Testimonials"
                                    />
                                </li>
                                <li className="nav-item">
                                    <ButtonNavigation selector="nav-link navbar"
                                        id="nav-contact"
                                        text="Contacts"
                                    />
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