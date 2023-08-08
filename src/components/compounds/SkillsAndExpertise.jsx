import React, { Component } from 'react';

// import Skills from "../../data/skills";
import HTML from "../../images/skills/html.svg";
import CSS3 from "../../images/skills/css3.svg";
import Sass from "../../images/skills/sass.svg";
import JavaScript from "../../images/skills/javascript.svg";
import JQuery from "../../images/skills/jquery.svg";
import Bootstrap from "../../images/skills/bootstrap.svg";
import VueJS from "../../images/skills/vue.svg";
import PHP from "../../images/skills/php.svg";
import MySQL from "../../images/skills/mysql.svg";
import Laravel from "../../images/skills/laravel.svg";
import Git from "../../images/skills/git.svg";
import Figma from "../../images/skills/figma.svg";
import Wix from "../../images/skills/wix.svg";
import OutSystems from "../../images/skills/outsystems.svg";
import MongoDB from "../../images/skills/mongodb.svg";
import NodeJS from "../../images/skills/nodejs.svg";
import ExpressJS from "../../images/skills/expressjs.svg";
import Firebase from "../../images/skills/firebase.svg";
import ReactJS from "../../images/skills/reactjs.svg";
import PostgreSQL from "../../images/skills/postgreSQL.svg";

const skills = [
    { name: 'HTML 5', image: HTML},
    { name: 'CSS 3', image: CSS3},
    { name: 'Sass', image: Sass},
    { name: 'JavaScript', image: JavaScript},
    { name: 'JQuery', image: JQuery},
    { name: 'Bootstrap', image: Bootstrap},
    { name: 'VueJS', image: VueJS},
    { name: 'PHP', image: PHP},
    { name: 'MySQL', image: MySQL},
    { name: 'Laravel', image: Laravel},
    { name: 'Git', image: Git},
    { name: 'Figma', image: Figma},
    { name: 'Wix', image: Wix},
    { name: 'OutSystems', image: OutSystems},
    { name: 'MongoDB', image: MongoDB},
    { name: 'NodeJS', image: NodeJS},
    { name: 'ExpressJS', image: ExpressJS},
    { name: 'Firebase', image: Firebase},
    { name: 'ReactJS', image: ReactJS},
    { name: 'PostgreSQL', image: PostgreSQL}
    // Add more skills here
];

class SkillsAndExpertise extends Component {
  renderSkills() {
    return skills.map(skill => (
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
