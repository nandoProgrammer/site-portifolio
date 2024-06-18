import React from "react";

import { WrapperHome } from "./Home.style";
import { Skills } from "../../components/Skills/Skills";
import { AboutMe } from "../../components/AboutMe/AboutMe";

import { Wrapper, Separator } from "../../styles/bootstrap";
import Projects from "../../components/Projects/Projects";

export const Home: React.FunctionComponent = () => {
  return (
    <WrapperHome>
      <AboutMe />
      <Wrapper>{/* <Separator /> */}</Wrapper>
      <Skills />
      <Wrapper>{/* <Separator /> */}</Wrapper>
    </WrapperHome>
  );
};

export default Home;
