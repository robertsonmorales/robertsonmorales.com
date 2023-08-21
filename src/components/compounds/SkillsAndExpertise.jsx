import React from 'react';

import Subheadline from "../atoms/Subheadline";
import Skills from "../../data/skills";

class SkillsAndExpertise extends React.Component {
  renderSkills() {
    return Skills.map(skill => (
      <img
        key={skill.name}
        src={skill.image}
        alt={skill.name}
        className="skill-img p-4"
        title={skill.name}
        width="110"
        height="110"
        loading='lazy'
      />
    ));
  }

  render() {
    return (
      <section id="skills" className="py-5 py-md-0 screen-height bg-light">
        <div className="container text-center">
          <Subheadline 
            section="ABOUT MY"
            label="Skills & Expertise" />

          <div className="skill-gallery">
            { this.renderSkills() }
          </div>
        </div>
      </section>
    );
  }
}

export default SkillsAndExpertise;
