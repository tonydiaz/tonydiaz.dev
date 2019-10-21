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
  <section className="bg-light" id="skills">
    <div className="container">
      <h2 className="title">Skills</h2>
      <div className="row">
        <div className="col col-6 desktop-col-3">
          <MainSkill>
            <MainSkillIcon>{'</>'}</MainSkillIcon>
            <MainSkillTitle>HTML</MainSkillTitle>
            <MainSkillRating>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </MainSkillRating>
            <MainSkillDescription>
              Blah blah HTML experience with tags, modern Blahn blah HTML can do
              other stuff blah de blah
            </MainSkillDescription>
          </MainSkill>
        </div>
        <div className="col col-6 desktop-col-3">
          <MainSkill>
            <MainSkillIcon>{'{...}'}</MainSkillIcon>
            <MainSkillTitle>CSS</MainSkillTitle>
            <MainSkillRating>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </MainSkillRating>
            <MainSkillDescription>
              Blah blah HTML experience with tags, modern Blahn blah HTML can do
              other stuff blah de blah
            </MainSkillDescription>
          </MainSkill>
        </div>
        <div className="col col-6 desktop-col-3">
          <MainSkill>
            <MainSkillIcon>{'JS'}</MainSkillIcon>
            <MainSkillTitle>Javascript</MainSkillTitle>
            <MainSkillRating>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </MainSkillRating>
            <MainSkillDescription>
              Blah blah HTML experience with tags, modern Blahn blah HTML can do
              other stuff blah de blah
            </MainSkillDescription>
          </MainSkill>
        </div>
        <div className="col col-6 desktop-col-3">
          <MainSkill>
            <MainSkillIcon>{'PHP'}</MainSkillIcon>
            <MainSkillTitle>PHP</MainSkillTitle>
            <MainSkillRating>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </MainSkillRating>
            <MainSkillDescription>
              Blah blah HTML experience with tags, modern Blahn blah HTML can do
              other stuff blah de blah
            </MainSkillDescription>
          </MainSkill>
        </div>
      </div>
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

const MainSkill = styled.div`
  margin: 36px 0;
  padding: 0 12px;
`;

const MainSkillIcon = styled.div`
  height: 150px;
  width: 175px;
  margin: 0 auto;
  background: rgb(37, 72, 100);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  font-weight: bold;
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%);
  clip-path: polygon(22% 0%, 78% 0%, 100% 50%, 78% 100%, 22% 100%, 0% 50%);
  margin-bottom: 12px;
`;

const MainSkillTitle = styled.div`
  font-weight: bold;
  font-size: 32px;
  text-align: center;
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

const MainSkillDescription = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #666;
`;

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
  background: #ddd;
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
