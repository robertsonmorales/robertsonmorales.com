import React from "react";
import Hero from "./compounds/Hero";
import Services from "./compounds/Services";
import Works from "./compounds/Works";
import SkillsAndExpertise from "./compounds/SkillsAndExpertise";
import AboutMe from "./compounds/AboutMe";
import Testimonials from "./compounds/Testimonials";
import Contacts from "./compounds/Contacts";

class Content extends React.Component {
    render() {
        return (
            <main>
                <Hero />
                <Services />
                <Works />
                <SkillsAndExpertise />
                <AboutMe />
                <Testimonials />
                <Contacts />
            </main>
        )
    }
}

export default Content