import React from "react";
import {
  HeadingMd,
  Paragraph,
  Card,
  SectionXp,
  Wrapper,
  Emphasis,
  HeadingXl,
} from "../../styles/bootstrap";
import circlesRight from "../../assets/circles-right.png";

interface IPropsCard {
  title: string;
  xp: number;
}

const CardSkill = ({ title, xp }: IPropsCard) => {
  return (
    <Card>
      <HeadingMd>
        <Emphasis>{title}</Emphasis>
      </HeadingMd>
      <Paragraph marginTop={"1rem"}>
        {xp} {xp > 1 ? "Anos" : "Ano"} de Experiência
      </Paragraph>
    </Card>
  );
};

export const Skills: React.FunctionComponent = () => {
  return (
    <SectionXp background={circlesRight}>
      <Wrapper direction={"row"} justify={"space-between"}>
        <HeadingXl>
          <Emphasis>Minhas Skills.</Emphasis>
        </HeadingXl>
      </Wrapper>
      <Wrapper direction={"row"} justify={"space-between"} gap={"14px"}>
        <CardSkill title={"HTML"} xp={4} />
        <CardSkill title={"CSS"} xp={4} />
        <CardSkill title={"SCSS"} xp={4} />
        <CardSkill title={"JavaScript"} xp={4} />
        <CardSkill title={"PHP"} xp={3} />
        <CardSkill title={"React"} xp={3} />
        <CardSkill title={"Angular"} xp={4} />
        <CardSkill title={"Node.js"} xp={2} />
        <CardSkill title={"Nest.js"} xp={2} />
        <CardSkill title={"AWS"} xp={1} />
        <CardSkill title={"Java"} xp={3} />
        <CardSkill title={"MySql"} xp={3} />
      </Wrapper>
    </SectionXp>
  );
};

export default Skills;
