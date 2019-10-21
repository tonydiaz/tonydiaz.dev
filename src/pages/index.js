import React from 'react';
// import { Link } from 'gatsby';
// import Image from '../components/image';
// import BackgroundImage from 'gatsby-background-image';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faMobileAlt,
  faCode,
  faCodeBranch,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroImage from '../components/hero';
import AboutSection from '../components/Homepage/about_section';
import SkillsSection from '../components/Homepage/skills_section';
import PortfolioSection from '../components/Homepage/portfolio_section';
import Header from '../components/header';

library.add(faMobileAlt, faCode, faCodeBranch, faRocket);

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroImage>
      <h1 className="hero_title">Hi. I'm Jarod Peachey</h1>
      <h4 className="hero_subtitle">
        I'm Front End Web Developer focused on code quality, consistencey and
        website speed.
      </h4>
      <a href="#about">
        <button className="button secondary transparent">
          Let's Build Something
        </button>
      </a>
    </HeroImage>
    <Header />
    <AboutSection />
    <SkillsSection />
    <PortfolioSection />
  </Layout>
);

export default IndexPage;
