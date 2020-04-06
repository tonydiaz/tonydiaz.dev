import React from "react";
// import { Link } from 'gatsby';
// import Image from '../components/image';
// import BackgroundImage from 'gatsby-background-image';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMobileAlt,
  faCode,
  faCodeBranch,
  faRocket,
  faBars,
  faEnvelope,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
  faPhp,
  faGithub,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroImage from "../components/hero";
import AboutSection from "../components/Homepage/about_section";
// import SkillsSection from "../components/Homepage/skills_section";
import BlogSection from "../components/Homepage/blog_section";
import TimelineSection from "../components/Homepage/timeline_section";
import { TonyImage } from "../components/image";
library.add(
  faMobileAlt,
  faCode,
  faCodeBranch,
  faRocket,
  faBars,
  faEnvelope,
  fab,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
  faPhp,
  faDatabase,
  faGithub,
  faWordpress
);

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroImage id="home">
      <TonyImage />
      <h1 className="hero_title">Hi. I'm Tony</h1>

      <h4 className="hero_subtitle">
        I'm a Frontend web developer focused on shipping code, testing and
        maintainabiity.
      </h4>
      <a href="#about">
        <button className="button secondary transparent">
          Let's Build Something
        </button>
      </a>
    </HeroImage>
    <AboutSection />
    <BlogSection />
    <TimelineSection />
  </Layout>
);

export default IndexPage;
