import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { styled } from 'linaria/react';
import Img from 'gatsby-image';

import BackgroundImage from 'gatsby-background-image';
// Use the following to support legacy browsers like IE11:
// import BackgroundImage from 'gatsby-background-image-es5'

/**
 * In this functional component a <BackgroundImage />  is compared to an <Img />.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components from index.js / page-2.js.
 * @return {*}
 * @constructor
 */
const HeroImage = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hero_image.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => {
      // Extract imageData.
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage
          Tag="section"
          // To style via external CSS see layout.css last examples:
          // className="test"
          fluid={imageData}
          backgroundColor="#040e18"
          style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            clipPath: 'polygon(100% 0, 100% 83%, 35% 95%, 0 87%, 0 0)',
          }}
          // Title get's passed to both container and noscriptImg.
          title="gbitest"
          // You are able to set a classId and style by wrapper (see below or
          // https://github.com/timhagn/gatsby-background-image/#styling--passed-through-styles):
          // classId="gbi"
          // style={{
          //   // Defaults are overwrite-able by setting one of the following:
          //   // backgroundSize: '',
          //   // backgroundPosition: '',
          //   // backgroundRepeat: '',
          // }}
          // To "force" the classic fading in of every image (especially on
          // imageData change for fluid / fixed) by setting `soft` on `fadeIn`:
          // fadeIn={`soft`}
          // To be able to use stacking context changing elements yourself,
          // set this to true to disable the "opacity hack":
          // preserveStackingContext={true}
          // You can "safely" (look them up beforehand ; ) add other props:
          id="gbitest"
          role="img"
          aria-label="gbitest"
        >
          <HeroContainer>
            <div className="container align-text-left">
              {children}
            </div>
          </HeroContainer>
        </BackgroundImage>
      );
    }}
  />
);

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  box-shadow: inset 0 0 0 2000px rgba(37, 56, 72, .3);
`;

export default HeroImage;
