import React from 'react';
// import { Link } from 'gatsby';
// import Image from '../components/image';
// import BackgroundImage from 'gatsby-background-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroImage from '../components/hero';
import AboutSection from '../components/Homepage/about_section';
import SkillsSection from '../components/Homepage/skills_section';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroImage>
      <h1 className="hero_title">Jarod Peachey</h1>
      <h4 className="hero_subtitle">Front End Web Developer and Designer</h4>
      <div className="hero_buttons">
        <button className="primary">Button</button>
        <button className="secondary transparent">Button</button>
      </div>
    </HeroImage>
    <AboutSection />
    <SkillsSection />
    <section>
      <div className="container">
        <h2 className="title">Portfolio</h2>
        <div className="center-text">
          <button type="button" className="primary">
            Button
          </button>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
