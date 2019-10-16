import React from 'react';
// import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="hero">
      <div className="hero_content container">
        <h1 className="hero_title">Jarod Peachey</h1>
        <h4 className="hero_subtitle">Front End Web Developer and Designer</h4>
        <div className="hero_buttons">
          <button className="primary">Button</button>
          <button className="secondary transparent">Button</button>
        </div>
      </div>
    </div>
    <section>
      <div className="container">
        <h2 className="title">About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>

        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
          pretium quis, sem.
        </p>

        <p>
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo.
        </p>

        <p>
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
          dapibus.
        </p>
        <div className="center-text">
          <button type="button" className="primary">
            Button
          </button>
        </div>
      </div>
    </section>
    <section className="bg-light">
      <div className="container">
        <h2 className="title">Skills</h2>
        <div className="row">
          <div className="col col-4">
            <div className="skills card">
              <div className="skills-icon">
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>
              <h4 className="skills-title">Responsive Design</h4>
              <p className="skills-info">
                Responsive design is at the core of my websites. I strive to
                make every website look beautiful and function easily on EVERY
                screen size.
              </p>
            </div>
          </div>
          <div className="col col-4">
            <div className="skills card">
              <div className="skills-icon">
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>
              <h4 className="skills-title">Responsive Design</h4>
              <p className="skills-info">
                Responsive design is at the core of my websites. I strive to
                make every website look beautiful and function easily on EVERY
                screen size.
              </p>
            </div>
          </div>
          <div className="col col-4">
            <div className="skills card">
              <div className="skills-icon">
                <Img fluid={data.file.childImageSharp.fluid} />
              </div>
              <h4 className="skills-title">Responsive Design</h4>
              <p className="skills-info">
                Responsive design is at the core of my websites. I strive to
                make every website look beautiful and function easily on EVERY
                screen size.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
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

export const query = graphql`
  query {
    file(relativePath: { eq: "skill_one.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
