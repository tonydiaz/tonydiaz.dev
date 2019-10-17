import React from 'react';
import { useStaticQuery, StaticQuery, graphql } from 'gatsby';
// import SkillsCard from '../skills_card';
// import Img from 'gatsby-image';
import { SkillsImageOne, SkillsImageTwo, SkillsImageThree } from '../image';

const SkillsSection = () => (
  <section className="bg-light">
    <div className="container">
      <h2 className="title">Skills</h2>
      <div className="row">
        <div className="col col-4">
          <div className="skills card">
            <div className="skills-icon">
              <SkillsImageOne />
            </div>
            <h4 className="skills-title">Responsive Design</h4>
            <p className="skills-info">
              Responsive design is at the core of my websites. I strive to make
              every website look beautiful and function easily on EVERY screen
              size.
            </p>
          </div>
        </div>
        <div className="col col-4">
          <div className="skills card">
            <div className="skills-icon">
              <SkillsImageTwo />
            </div>
            <h4 className="skills-title">Responsive Design</h4>
            <p className="skills-info">
              Responsive design is at the core of my websites. I strive to make
              every website look beautiful and function easily on EVERY screen
              size.
            </p>
          </div>
        </div>
        <div className="col col-4">
          <div className="skills card">
            <div className="skills-icon">
              <SkillsImageThree />
            </div>
            <h4 className="skills-title">Responsive Design</h4>
            <p className="skills-info">
              Responsive design is at the core of my websites. I strive to make
              every website look beautiful and function easily on EVERY screen
              size.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
