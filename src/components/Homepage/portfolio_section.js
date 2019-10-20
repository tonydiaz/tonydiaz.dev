import React from 'react';
import { styled } from 'linaria/react';
import { CalTrackImage } from '../image';

const PortfolioSection = () => (
  <section className="bg-white section" id="portfolio">
    <div className="container">
      <h2 className="title">Portfolio</h2>
      <div className="row">
        <div className="col col-6 desktop-col-4">
          <a href="/">
            <PortfolioWrapper>
              <PortfolioImage>
                <CalTrackImage />
              </PortfolioImage>
              <PortfolioTitle>CalTrack</PortfolioTitle>
              <PortfolioDescription>
                CalTrack is an app I built using React, Redux and Material UI.
                It allows multiple users to sign up and track their meals and
                workouts. The data is collected and their calories gained/lost
                are displayed on the dashboard.
              </PortfolioDescription>
              <PortfolioSkills>
                <PortfolioSkill>HTML</PortfolioSkill>
                <PortfolioSkill>CSS</PortfolioSkill>
                <PortfolioSkill>React</PortfolioSkill>
              </PortfolioSkills>
            </PortfolioWrapper>
          </a>
        </div>
        <div className="col col-6 desktop-col-4">
          <a href="/">
            <PortfolioWrapper>
              <PortfolioImage>
                <CalTrackImage />
              </PortfolioImage>
              <PortfolioTitle>CalTrack</PortfolioTitle>
              <PortfolioDescription>
                CalTrack is an app I built using React, Redux and Material UI.
                It allows multiple users to sign up and track their meals and
                workouts. The data is collected and their calories gained/lost
                are displayed on the dashboard.
              </PortfolioDescription>
              <PortfolioSkills>
                <PortfolioSkill>HTML</PortfolioSkill>
                <PortfolioSkill>CSS</PortfolioSkill>
                <PortfolioSkill>React</PortfolioSkill>
              </PortfolioSkills>
            </PortfolioWrapper>
          </a>
        </div>
        <div className="col col-6 desktop-col-4">
          <a href="/">
            <PortfolioWrapper>
              <PortfolioImage>
                <CalTrackImage />
              </PortfolioImage>
              <PortfolioTitle>CalTrack</PortfolioTitle>
              <PortfolioDescription>
                CalTrack is an app I built using React, Redux and Material UI.
                It allows multiple users to sign up and track their meals and
                workouts. The data is collected and their calories gained/lost
                are displayed on the dashboard.
              </PortfolioDescription>
              <PortfolioSkills>
                <PortfolioSkill>HTML</PortfolioSkill>
                <PortfolioSkill>CSS</PortfolioSkill>
                <PortfolioSkill>React</PortfolioSkill>
              </PortfolioSkills>
            </PortfolioWrapper>
          </a>
        </div>
        <div className="col col-6 desktop-col-4">
          <a href="/">
            <PortfolioWrapper>
              <PortfolioImage>
                <CalTrackImage />
              </PortfolioImage>
              <PortfolioTitle>CalTrack</PortfolioTitle>
              <PortfolioDescription>
                CalTrack is an app I built using React, Redux and Material UI.
                It allows multiple users to sign up and track their meals and
                workouts. The data is collected and their calories gained/lost
                are displayed on the dashboard.
              </PortfolioDescription>
              <PortfolioSkills>
                <PortfolioSkill>HTML</PortfolioSkill>
                <PortfolioSkill>CSS</PortfolioSkill>
                <PortfolioSkill>React</PortfolioSkill>
              </PortfolioSkills>
            </PortfolioWrapper>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const PortfolioWrapper = styled.div`
  position: relative;
  padding: 24px;
`;

const PortfolioImage = styled.div`
  position: relative;
  overflow: hidden;
  &::before {
    background: transparent;
    transition-duration: 5;
    display: block;
    min-height: 200px;
    width: 100%;
    content: "";
    z-index: 999;
    position: absolute;
  }
  &:hover::before {
    display: block;
    min-height: 200px;
    width: 100%;
    content: "View Project";
    display: flex;
    align-items: center;
    color: white;
    font-size: 38px;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    z-index: 999;
    position: absolute;
  }
`;

const PortfolioTitle = styled.div`
  font-size: 36px;
  color: black;
  font-weight: bold;
  text-align: center;
  margin: 12px 0;
`;

const PortfolioDescription = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
`;

const PortfolioSkills = styled.div`
  margin-top: 16px;
`;

const PortfolioSkill = styled.div`
  padding: 4px 12px;
  margin: 8px;
  background: rgb(37, 72, 100);
  // border: 1px solid #ddd;
  display: inline-block;
  font-weight: bold;
  font-size: 12px;
  border-radius: 4px;
  color: white;
`;

export default PortfolioSection;
