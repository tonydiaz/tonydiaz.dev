import React from 'react';
import { styled } from 'linaria/react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const skills = [
  {
    name: 'HTML',
    skillLevel: 90,
    tags: ['frontend'],
  },
  {
    name: 'CSS',
    skillLevel: 100,
    tags: ['frontend'],
  },
  {
    name: 'Javascript',
    skillLevel: 80,
    tags: ['frontend'],
  },
  {
    name: 'React',
    skillLevel: 90,
    tags: ['frontend'],
  },
  {
    name: 'Bootstrap',
    skillLevel: 60,
    tags: ['frontend', 'frameworks'],
  },
  {
    name: 'Material UI',
    skillLevel: 80,
    tags: ['frontend', 'frameworks'],
  },
  {
    name: 'Webpack',
    skillLevel: 70,
    tags: ['tools'],
  },
  {
    name: 'Babel',
    skillLevel: 60,
    tags: ['tools'],
  },
  {
    name: 'Git / Github',
    skillLevel: 80,
    tags: ['tools'],
  },
  {
    name: 'Wordpress',
    skillLevel: 50,
    tags: ['tools', 'frontend'],
  },
  {
    name: 'PHP',
    skillLevel: 60,
    tags: ['backend'],
  },
  {
    name: 'MySQL',
    skillLevel: 40,
    tags: ['backend'],
  },
];

const tools = skills.filter((skill) => {
  for (let i = 0; i < skill.tags.length; i++) {
    if (skill.tags[i] === 'tools') {
      return true;
    }
  }
});

console.log(tools);

const SkillsSection = () => (
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
            // top: -scrollValue,
            // clipPath: 'polygon(100% 0, 100% 83%, 35% 95%, 0 87%, 0 0)',
          }}
          // https://github.com/timhagn/gatsby-background-image/#styling--passed-through-styles):
          id="hero_image"
          fadeIn="soft"
        >
          <Wrapper className="container" id="skills">
            <h2 className="title">Skills</h2>
            <div className="row desktop">
              <div className="col col-6">
                <SkillWrapper>
                  <h2>Languages</h2>
                  <div className="row mobile">
                    {skills
                      .filter((skill) => {
                        for (let i = 0; i < skill.tags.length; i++) {
                          if (skill.tags[i] !== 'tools') {
                            return true;
                          }
                        }
                      })
                      .map(skill => (
                        <div className="col col-6 tablet-col-4 desktop-col-3">
                          <MainSkill>
                            <MainSkillIconContainer>
                              {' '}
                              <MainSkillIcon>
                                <FontAwesomeIcon icon="code-branch" />
                              </MainSkillIcon>
                            </MainSkillIconContainer>
                            <MainSkillTitle>{skill.name}</MainSkillTitle>
                            <MainSkillRating>
                              <Star />
                              <Star />
                              <Star />
                              <Star />
                              <Star />
                            </MainSkillRating>
                          </MainSkill>
                        </div>
                      ))}
                  </div>
                </SkillWrapper>
              </div>
              <div className="col col-6">
                <SkillWrapper>
                  <h2>Tools</h2>
                  <div className="row mobile">
                    {skills
                      .filter((skill) => {
                        for (let i = 0; i < skill.tags.length; i++) {
                          if (skill.tags[i] === 'tools') {
                            return true;
                          }
                        }
                      })
                      .map(skill => (
                        <div className="col col-6 tablet-col-4 desktop-col-3">
                          <MainSkill>
                            <MainSkillIconContainer>
                              {' '}
                              <MainSkillIcon>
                                <FontAwesomeIcon icon="code-branch" />
                              </MainSkillIcon>
                            </MainSkillIconContainer>
                            <MainSkillTitle>{skill.name}</MainSkillTitle>
                            <MainSkillRating>
                              <Star />
                              <Star />
                              <Star />
                              <Star />
                              <Star />
                            </MainSkillRating>
                          </MainSkill>
                        </div>
                      ))}
                  </div>
                </SkillWrapper>
              </div>
            </div>
          </Wrapper>
        </BackgroundImage>
      );
    }}
  />
);

const Wrapper = styled.div`
  color: white;
`;

const SkillWrapper = styled.div`
  padding: 0 12px;
`;

const MainSkill = styled.div`
  margin-bottom: 36px;
  padding: 0 12px;
`;

const MainSkillIconContainer = styled.div`
  height: 140px;
  width: 166px;
  font-size: 48px;
  margin: 0 auto;
  clip-path: polygon(22% 0%, 78% 0%, 100% 50%, 78% 100%, 22% 100%, 0% 50%);
  margin-bottom: 12px;
  background: white;
  padding-top: 2.5px;
`;

const MainSkillIcon = styled.div`
  height: 135px;
  width: 160px;
  margin: 0 auto;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  background: rgb(37, 72, 100);
  clip-path: polygon(22% 0%, 78% 0%, 100% 50%, 78% 100%, 22% 100%, 0% 50%);
`;

const MainSkillTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
  @media (min-width: 576px) {
    font-size: 28px;
  }
`;

const MainSkillRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;

const Star = styled.div`
  position: relative;
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.9em;
  margin-right: 0.9em;
  margin-bottom: 1.2em;
  border-right: 0.3em solid transparent;
  border-bottom: 0.7em solid #fc0;
  border-left: 0.3em solid transparent;
  font-size: 12px;
  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: 0.6em;
    left: -1em;
    border-right: 1em solid transparent;
    border-bottom: 0.7em solid #fc0;
    border-left: 1em solid transparent;
    transform: rotate(-35deg);
  }
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: 0.6em;
    left: -1em;
    border-right: 1em solid transparent;
    border-bottom: 0.7em solid #fc0;
    border-left: 1em solid transparent;
    transform: rotate(35deg);
  }
`;
export default SkillsSection;
