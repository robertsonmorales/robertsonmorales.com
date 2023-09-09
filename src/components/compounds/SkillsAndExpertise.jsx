import React, { useEffect } from 'react';

import Subheadline from "../atoms/Subheadline";
import Skills from "../../data/skills";
import { onScrollReveal } from '../../helper/scroll-reveal';

function SkillsAndExpertise () {

  useEffect(() => {
    onScrollReveal('.skill-gallery img', {
      delay: 300,
      distance: '5%',
      origin: 'left',
      easing: 'ease',
      interval: 50
    });
  });

  const renderSkills = () =>{
    return Skills.map((skill, index) => (
      <div className="skill-img-wrapper" key={ index }>
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
      </div>
    ));
  }

  return (
    <section id="skills" className="py-5 py-md-0 screen-height bg-light">
      <div className="container text-center">
        <Subheadline 
          section="Skills & Expertise"
          label="What I can do" />

        <div className="flexbox-center">
          <div className="skill-gallery">
            { renderSkills() }
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsAndExpertise;
