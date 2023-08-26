import React from "react";
import Hero from "../components/compounds/Hero";
import Services from "../components/compounds/Services";
import Works from "../components/compounds/Works";
import SkillsAndExpertise from "../components/compounds/SkillsAndExpertise";
import AboutMe from "../components/compounds/AboutMe";
import Testimonials from "../components/compounds/Testimonials";
import Contacts from "../components/compounds/Contacts";

function Home(){
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

export default Home;