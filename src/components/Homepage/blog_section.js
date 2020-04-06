import React from "react";
import { styled } from "linaria/react";
import { graphql, StaticQuery, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Row = styled.div`
  margin-top: 32px;
`;
const BlogSection = () => (
  <StaticQuery
    query={graphql`
      query {
        allBlogPost(sort: { order: DESC, fields: date }) {
          edges {
            node {
              id
              title
              date
              tags
              slug
            }
          }
        }
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
      console.log("data", data);
      const { edges } = data.allBlogPost;
      const topThreeEdges = edges.slice(0, 3);
      const backgroundFluidImageStack = [
        "linear-gradient(rgba(37, 72, 100, 0.87), rgba(37, 72, 100, 0.87))",
        data.desktop.childImageSharp.fluid,
      ];

      return (
        <BackgroundImage
          Tag="section"
          // To style via external CSS see layout.css last examples:
          // className="test"
          fluid={backgroundFluidImageStack}
          backgroundColor="#040e18"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            background: "linear-gradient()",
          }}
          // https://github.com/timhagn/gatsby-background-image/#styling--passed-through-styles):
          id="hero_image"
          fadeIn="soft"
        >
          <Wrapper className="container" id="blog">
            <h2 className="title">Blog</h2>
            <div className="center-text">
              <h2>Latest posts:</h2>
            </div>
            <Row className="row">
              {topThreeEdges.map((edge) => {
                const blog = edge.node;
                return (
                  <div
                    className="col col-4 desktop-col-4 center-text"
                    key={blog.title}
                  >
                    <div className="">
                      <Link to={blog.slug}>
                        <ColorLink>
                          <h4>{blog.title}</h4>
                        </ColorLink>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Row>
          </Wrapper>
        </BackgroundImage>
      );
    }}
  />
);

const Wrapper = styled.div`
  color: white;
  & .title::after {
    background: white;
  }
`;

const ColorLink = styled.div`
  color: white;
`;

export default BlogSection;
