import React from "react";

import {
  Wrapper,
  HeadingLg,
  Paragraph,
  HeadingMd,
  Emphasis,
  CardProjetcWrapper,
  Layer,
  WrapperCardHyperlinks,
  HeadingXl,
} from "../../styles/bootstrap";

interface IPropsCard {
  screenShotProject: string;
  titleProject: string;
  listTechnologies: string[];
}

interface IPropsLayerHyperLiks {
  urlLive: string;
  urlCode: string;
}

const LayerHyperLinks = ({ urlLive, urlCode }: IPropsLayerHyperLiks) => {
  return (
    <Layer>
      <HeadingMd>
        <Emphasis>Teste</Emphasis>
      </HeadingMd>
      <HeadingMd>
        <Emphasis>Teste</Emphasis>
      </HeadingMd>
    </Layer>
  );
};

const Card = ({
  screenShotProject,
  titleProject,
  listTechnologies,
}: IPropsCard) => {
  return (
    <CardProjetcWrapper>
      <WrapperCardHyperlinks>
        <LayerHyperLinks urlLive={"ug"} urlCode={"ooo"} />
      </WrapperCardHyperlinks>
      <Paragraph marginTop={".5rem"} marginBottom={".5rem"}>
        lorem ipsum
      </Paragraph>
      <HeadingMd>{titleProject}</HeadingMd>
      <Paragraph marginTop={".5rem"} marginBottom={".5rem"}>
        {listTechnologies.join(", ")}
      </Paragraph>
      {/* <img
        src={screenShotProject}
        alt={`${titleProject} screenshot`}
        loading="lazy"
        width="100%"
        height="315"
      /> */}
    </CardProjetcWrapper>
  );
};

export const Projects: React.FunctionComponent = () => {
  return (
    <>
      <Wrapper direction={"row"} justify={"space-between"}>
        <HeadingXl>
          <Emphasis>Projetos.</Emphasis>
        </HeadingXl>
      </Wrapper>

      <Wrapper direction={"row"} justify={"space-between"}>
        <Card
          screenShotProject={
            "https://th.bing.com/th/id/OIP.Y5Ygai29oo36dlek7s7TdQHaE7?rs=1&pid=ImgDetMain"
          }
          titleProject={"Lorem Ipsum dolor"}
          listTechnologies={["React", "scss"]}
        />
        <Card
          screenShotProject={
            "https://th.bing.com/th/id/OIP.Y5Ygai29oo36dlek7s7TdQHaE7?rs=1&pid=ImgDetMain"
          }
          titleProject={"Lorem Ipsum dolor"}
          listTechnologies={["React", "scss"]}
        />
        <Card
          screenShotProject={
            "https://th.bing.com/th/id/OIP.Y5Ygai29oo36dlek7s7TdQHaE7?rs=1&pid=ImgDetMain"
          }
          titleProject={"Lorem Ipsum dolor"}
          listTechnologies={["React", "scss"]}
        />
      </Wrapper>
    </>
  );
};

export default Projects;
