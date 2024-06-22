import React from "react";
import {
  Wrapper,
  HeadingLg,
  Paragraph,
  Emphasis,
  Photo,
  SectionAboutMe,
  HeadingMd,
} from "../../styles/bootstrap";
import circlesLeft from "../../assets/circles-left.png";
import photoAboutMe from "../../assets/photo-about-me.png";

export const AboutMe: React.FunctionComponent = () => {
  return (
    <SectionAboutMe background={circlesLeft}>
      <Wrapper
        direction={"row"}
        justify={"space-between"}
        alignItems={"center"}
      >
        <div>
          <HeadingMd>
            <Emphasis>Fullstack Engineer</Emphasis>
          </HeadingMd>
          <HeadingLg>
            Olá, Tudo Bem? Prazer
            <br />
            Eu Sou <Emphasis>Fernando Costa.</Emphasis>
          </HeadingLg>
          <Paragraph width="100px">
            Estou na área há quase 4 anos profissionalmente, Trabalhando para
            grandes empresas e utilizando as melhores
            <Emphasis> Tecnologias do mercado, com Segurança </Emphasis> e e
            foco na <Emphasis>Experiência do usuário</Emphasis>.
          </Paragraph>
        </div>
        <Photo photo={photoAboutMe} />
      </Wrapper>
    </SectionAboutMe>
  );
};

export default AboutMe;
