import React, { Component } from 'react';

import Skills from "../../data/skills";

class SkillsAndExpertise extends Component {
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
      />
    ));
  }

  render() {
    return (
      <section id="skills" className="py-5 py-md-0 screen-height bg-light">
        <div className="container text-center">
          <div className="mb-4">
            <div className="text-section">ABOUT MY</div>
            <h2 className="text-highlight">Skills & Expertise</h2>
          </div>

          <div className="skill-gallery">
            {this.renderSkills()}
          </div>
        </div>
      </section>
    );
  }
}

export default SkillsAndExpertise;
