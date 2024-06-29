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
        direction={"row-reverse"}
        justify={"space-between"}
        alignItems={"center"}
      >
        <Photo photo={photoAboutMe} />
        <div style={{ maxWidth: "530px" }}>
          <HeadingMd>
            <Emphasis>Fullstack Engineer</Emphasis>
          </HeadingMd>
          <HeadingLg>
            Olá, Tudo Bem? Prazer Eu Sou <Emphasis>Fernando Costa.</Emphasis>
          </HeadingLg>
          <Paragraph style={{ maxWidth: "530px" }}>
            Estou na área há quase 4 anos profissionalmente, Trabalhando para
            grandes empresas e utilizando as melhores
            <Emphasis> Tecnologias do mercado, com Segurança </Emphasis> e foco
            na <Emphasis>Experiência do usuário</Emphasis>.
          </Paragraph>
        </div>
      </Wrapper>
    </SectionAboutMe>
  );
};

export default AboutMe;
