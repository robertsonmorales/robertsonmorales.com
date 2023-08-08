import React from 'react';
import FeatherIcon from 'feather-icons-react';

class Header extends React.Component {
    navSelected(nav){
        // alert(nav);
    }

    render(){
        return (
            <header>
                <nav
                    className="navbar navbar-expand-md navbar-light mobile-bg-white fixed-top"
                    id="navbar"
                >
                    <div className="container from-nav mx-3 mx-md-auto">
                        <a className="navbar-brand border-0 bg-transparent outline-none" href="/">
                            <div className="font-weight-500">
                            Robertson<span className="text-primary">.</span>
                            </div>
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
                                        <button
                                            type="button"
                                            className="nav-link navbar active"
                                            id="nav-hero"
                                            onClick={this.navSelected('hero')}
                                        >Home</button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            type="button"
                                            className="nav-link navbar"
                                            id="nav-services"
                                            onClick={this.navSelected('services')}
                                        >Services</button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            type="button"
                                            className="nav-link navbar"
                                            id="nav-works"
                                            onClick={this.navSelected('works')}
                                        >Work</button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            type="button"
                                            className="nav-link navbar"
                                            id="nav-about-me"
                                            onClick={this.navSelected('about-me')}
                                        >About Me</button>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link navbar"
                                            target="_blank"
                                            href="/attachment/resume.pdf"
                                            id="nav-download"
                                        >
                                            <span className="mr-2">Resume</span>
                                            <FeatherIcon icon="external-link" size="{28}"></FeatherIcon>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            type="button"
                                            className="nav-link navbar"
                                            id="nav-testimonials"
                                            onClick={this.navSelected('testimonials')}
                                        >Testimonials</button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            type="button"
                                            className="nav-link navbar"
                                            id="nav-contact"
                                            onClick={this.navSelected('contact')}
                                        >Contacts</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header