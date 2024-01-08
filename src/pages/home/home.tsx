import React from 'react';

import { WrapperHome } from './Home.style';
import { Skills } from '../../components/Skills/Skills';
import { Projects } from '../../components/Projects/Projects';
import { AboutMe } from '../../components/AboutMe/AboutMe';

import { Wrapper, Separator } from '../../styles/bootstrap';

export const Home: React.FunctionComponent = () => {
  return (
    <WrapperHome>
      <AboutMe/>
      <Wrapper>
        <Separator />
      </Wrapper>
      <Skills />
    </WrapperHome>
  );
}

export default Home;