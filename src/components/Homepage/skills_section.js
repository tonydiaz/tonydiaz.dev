import React from 'react';
import { styled } from 'linaria/react';

const SkillsSection = () => (
  <section className="bg-light" id="skills">
    <div className="container">
      <h2 className="title">Skills</h2>
      <div className="row">
        <div className="col col-4">
          <p>Flsakdfjs lskjo i jl, I kjasdfl nkj ljksj df. I kslfdl nh fls. Ekfliusj l kljsfdlk, klsdjfljf, lksdjflkjflsdf - sdfkj. lskdjfs lkjfasdljfsd. KJDFLjlkj, lksjdaflkjdf.</p>
        </div>
        <div className="col col-8">
          <div className="row mobile-lg">
            <div className="col col-2">
              <ProgressTitle>HTML</ProgressTitle>
            </div>
            <div className="col col-10">
              <Progress>
                <ProgressBar value={90} />
              </Progress>
            </div>
          </div>         
        </div>
      </div>

    </div>
  </section>
);

const Progress = styled.div`
  background: white;
  border-radius: 50px;
`;

const ProgressTitle = styled.div``;

const ProgressBar = styled.div`
  height: 20px;
  width: ${props => props.value}%;
  background: orange;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
`;

export default SkillsSection;
