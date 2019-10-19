import React from 'react';
import { styled } from 'linaria/react';

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
  <section className="bg-white" id="skills">
    <div className="container">
      <h2 className="title">Skills</h2>
      <div className="row">
        <div className="col col-6">
          <SkillWrapper>
            <h2>Languages</h2>
            {skills
              .filter((skill) => {
                for (let i = 0; i < skill.tags.length; i++) {
                  if (skill.tags[i] !== 'tools') {
                    return true;
                  }
                }
              })
              .map(skill => (
                <ProgressContainer>
                  <ProgressTitle>{skill.name}</ProgressTitle>
                  <Progress>
                    <ProgressBar value={skill.skillLevel} />
                  </Progress>
                </ProgressContainer>
              ))}
          </SkillWrapper>
        </div>
        <div className="col col-6">
          <SkillWrapper>
            <h2>Tools</h2>
            {skills
              .filter((skill) => {
                for (let i = 0; i < skill.tags.length; i++) {
                  if (skill.tags[i] === 'tools') {
                    return true;
                  }
                }
              })
              .map(skill => (
                <ProgressContainer>
                  <ProgressTitle>{skill.name}</ProgressTitle>
                  <Progress>
                    <ProgressBar value={skill.skillLevel} />
                  </Progress>
                </ProgressContainer>
              ))}
          </SkillWrapper>
        </div>
      </div>
    </div>
  </section>
);

const SkillWrapper = styled.div`
  padding: 0 12px;
`;

const ProgressContainer = styled.div`
  // display: flex;
  // flex: 1 1 0;
  // align-items: center;
  margin-bottom: 16px;
`;

const Progress = styled.div`
  background: #eee;
  border-radius: 50px;
  // flex: 1 1 0;
  // max-width: 70%;
  margin-left: auto;
`;

const ProgressTitle = styled.div`
  margin-bottom: 8px;
  font-weight: bold;
`;

const ProgressBar = styled.div`
  height: 18px;
  width: ${props => props.value}%;
  background: orange;
  border-radius: 50px;
  // border-bottom-left-radius: 50px;
`;

export default SkillsSection;
