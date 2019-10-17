import React from 'react';
import { useStaticQuery, StaticQuery, graphql } from 'gatsby';
import { SkillsImageOne, SkillsImageTwo, SkillsImageThree } from '../image';
import { styled } from 'linaria/react';

const SkillsSection = () => (
  <section className="bg-light">
    <div className="container">
      <h2 className="title">Skills</h2>
      <div className="row">
        <div className="col col-6 desktop-col-4">
          <SkillsCard>
            <SkillsIcon>
              <SkillsImageOne />
            </SkillsIcon>
            <SkillsTitle>Responsive Design</SkillsTitle>
            <SkillsInfo>
              Responsive design is at the core of my websites. I strive to make
              every website look beautiful and function easily on EVERY screen
              size.
            </SkillsInfo>
          </SkillsCard>
        </div>
        <div className="col col-6 desktop-col-4">
          <SkillsCard>
            <SkillsIcon>
              <SkillsImageTwo />
            </SkillsIcon>
            <SkillsTitle>Responsive Design</SkillsTitle>
            <SkillsInfo>
              Responsive design is at the core of my websites. I strive to make
              every website look beautiful and function easily on EVERY screen
              size.
            </SkillsInfo>
          </SkillsCard>
        </div>
        <div className="col col-6 desktop-col-4">
          <SkillsCard>
            <SkillsIcon>
              <SkillsImageThree />
            </SkillsIcon>
            <SkillsTitle>Responsive Design</SkillsTitle>
            <SkillsInfo>
              Responsive design is at the core of my websites. I strive to make
              every website look beautiful and function easily on EVERY screen
              size.
            </SkillsInfo>
          </SkillsCard>
        </div>
      </div>
    </div>
  </section>
);

const SkillsCard = styled.div`
  padding: 24px;
  // border: 1px solid #ddd;
  // background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

const SkillsIcon = styled.div`
  margin: 0 auto;
  width: 120px;
  margin-bottom: 12px;
`;

const SkillsTitle = styled.div`
  font-size: 22px;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 8px;
`;

const SkillsInfo = styled.div`
  font-size: 16px;
`;


export default SkillsSection;
