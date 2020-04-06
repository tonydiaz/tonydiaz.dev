import React from "react";
import { styled } from "linaria/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faTools,
  faRunning,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";
const AboutSection = () => (
  <section className="bg-white" id="about">
    <div className="container center-text text-primary">
      <h2 className="title">About Me</h2>
      <p>
        I’m a entrepreneurial minded engineer with over 18 years of engineering
        experience in software development, systems engineering, and integration
        and test. This experience includes legacy systems and new technologies.
        I have degrees in Computer Science, Engineering Management and an MBA.
        I’m a continuous learner who is dedicated and adaptable. I’m currently
        working for IBM performing frontend development on IBM Watson Assistant.
      </p>
      <h2>Demonstrated skill in:</h2>
      <Row className="row">
        <div className="col col-4 desktop-col-4">
          <MainSkill>
            <MainSkillIcon>
              <FontAwesomeIcon icon="code" />
            </MainSkillIcon>
            <MainSkillTitle>Software Development</MainSkillTitle>
            {/* <MainSkillDescription>
              <p>18+ years of exerience on software projects</p>
            </MainSkillDescription> */}
          </MainSkill>
        </div>
        <div className="col col-4 desktop-col-4">
          <MainSkill>
            <MainSkillIcon>
              <FontAwesomeIcon icon={faCity} />
            </MainSkillIcon>
            <MainSkillTitle>Software Architecture</MainSkillTitle>
          </MainSkill>
        </div>
        <div className="col col-4 desktop-col-4">
          <MainSkill>
            <MainSkillIcon>
              <FontAwesomeIcon icon={faTools} />
            </MainSkillIcon>
            <MainSkillTitle>DevOps</MainSkillTitle>
            {/* <MainSkillDescription>
              <p>
                Whether creating a readable file structure or well-defined
                functions, I make sure my code is easy to maintain in the
                future.
              </p>
              <p>
                (That means no functions named <code>doSomething()</code> {")"}
              </p>
            </MainSkillDescription> */}
          </MainSkill>
        </div>
      </Row>
      <Row className="row">
        <div className="col col-4 desktop-col-4">
          <MainSkill>
            <MainSkillIcon>
              <FontAwesomeIcon icon={faAws} />
            </MainSkillIcon>
            <MainSkillTitle>Cloud Platforms</MainSkillTitle>
            {/* <MainSkillDescription>
              <p>- AWS Certified Solutions Architect</p>
              <p>- IBM Certified Application Developer</p>
            </MainSkillDescription> */}
          </MainSkill>
        </div>
        <div className="col col-4 desktop-col-4">
          <MainSkill>
            <MainSkillIcon>
              <FontAwesomeIcon icon={faRunning} />
            </MainSkillIcon>
            <MainSkillTitle>Agile Processes</MainSkillTitle>
            {/* <MainSkillDescription>
              <p>- Certified Scrum Master</p>
            </MainSkillDescription> */}
          </MainSkill>
        </div>
        <div className="col col-4 desktop-col-4">
          <MainSkill>
            <MainSkillIcon>
              <FontAwesomeIcon icon={faTasks} />
            </MainSkillIcon>
            <MainSkillTitle>Project Management</MainSkillTitle>
            {/* <MainSkillDescription>
              <p>- Certified Project Management Professional</p>
            </MainSkillDescription> */}
          </MainSkill>
        </div>
      </Row>
      <p>
        I’m interested in challenging opportunities where I can use my
        experience to add value.
      </p>
      {/* <div className="center-text">
        <a href="mailto:td@tonydiaz.me">
          <button type="button" className="primary">
            Contact Me
          </button>
        </a>
      </div> */}
    </div>
  </section>
);

const Row = styled.div`
  margin-top: 32px;
`;

const MainSkill = styled.div`
  margin-bottom: 36px;
  padding: 0 12px;
`;

const MainSkillIcon = styled.div`
  height: 135px;
  width: 160px;
  margin: 0 auto;
  background: rgb(37, 72, 100);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 48px;
  // font-weight: bold;
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%);
  clip-path: polygon(22% 0%, 78% 0%, 100% 50%, 78% 100%, 22% 100%, 0% 50%);
  margin-bottom: 12px;
`;

const MainSkillTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-bottom: 16px;
  @media (min-width: 576px) {
    font-size: 24px;
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
    content: "";
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
    content: "";
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

const MainSkillDescription = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #666;
  & p {
    line-height: 28px;
  }
`;

export default AboutSection;
