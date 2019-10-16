import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero">
      <div className="hero_content container">
        <h1 className="hero_title">Jarod Peachey</h1>
        <h4 className="hero_subtitle">Front End Web Developer and Designer</h4>
        <div className="hero_buttons">
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
      </div>
    </div>
    <div className="container">
      <h3 className="title">
        About Me
      </h3>
    </div>
  </Layout>
);

export default IndexPage;
