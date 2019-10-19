import React from 'react';
import { styled } from 'linaria/react';
import {SlowBuffer} from 'buffer';

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
    tags: 'backend',
  },
];

const SkillsSection = () => (
  <section className="bg-light" id="skills">
    <div className="container">
      <h2 className="title">Skills</h2>
      <div className="container">
        <div className="row">
          <div className="col col-5">
            <p>
              Flsakdfjs lskjo i jl, I kjasdfl nkj ljksj df. I kslfdl nh fls.
              Ekfliusj l kljsfdlk, klsdjfljf, lksdjflkjflsdf - sdfkj. lskdjfs
              lkjfasdljfsd. KJDFLjlkj, lksjdaflkjdf.
            </p>
          </div>
          <div className="col col-6 offset-1">
            {skills.map(skill => (
              <ProgressContainer>
                <ProgressTitle>{skill.name}</ProgressTitle>
                <Progress>
                  <ProgressBar value={skill.skillLevel} />
                </Progress>
              </ProgressContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProgressContainer = styled.div`
  display: flex;
  flex: 1 1 0;
  align-items: center;
  margin-bottom: 10px;
`;

const Progress = styled.div`
  background: white;
  border-radius: 50px;
  flex: 1 1 0;
  max-width: 70%;
  margin-left: auto;
`;

const ProgressTitle = styled.div`
  margin-right: 8px;
  font-weight: bold;
`;

const ProgressBar = styled.div`
  height: 22.5px;
  width: ${props => props.value}%;
  background: orange;
  border-radius: 50px;
  // border-bottom-left-radius: 50px;
`;

export default SkillsSection;
