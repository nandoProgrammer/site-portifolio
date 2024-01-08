import React from 'react';

import { Wrapper, HeadingLg, Paragraph, HeadingMd } from '../../styles/bootstrap';
import { CardProjetcWrapper, Layer, WrapperCardHyperlinks } from './Projects.style';
import { Emphasis } from '../AboutMe/AboutMe.style';

interface IPropsCard {
   screenShotProject: string, 
   titleProject: string,
   listTechnologies: string[]
} 

interface IPropsLayerHyperLiks {
    urlLive: string,
    urlCode: string
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

const Card = ({screenShotProject, titleProject, listTechnologies}: IPropsCard) => {
    return (
        <CardProjetcWrapper>
            <WrapperCardHyperlinks>
                <LayerHyperLinks urlLive={'ug'} urlCode={'ooo'} />
                <img src={screenShotProject} alt={`${titleProject} screenshot`} loading='lazy' width="100%" height="315" />
            </WrapperCardHyperlinks>
            <HeadingMd>{titleProject}</HeadingMd>
            <Paragraph marginTop={'.5rem'} marginBottom={'.5rem'}>{listTechnologies.join(', ')}</Paragraph>
        </CardProjetcWrapper>
    );
}


export const Projects: React.FunctionComponent = () => {
    return (
        <>
            <Wrapper direction={'row'} justify={'space-between'}>
              <HeadingLg>Projetos</HeadingLg>
            </Wrapper>

            <Wrapper direction={'row'} justify={'space-between'}>
               <Card screenShotProject={'https://th.bing.com/th/id/OIP.Y5Ygai29oo36dlek7s7TdQHaE7?rs=1&pid=ImgDetMain'} titleProject={'Lorem Ipsum'} listTechnologies={['React', 'scss']} />
               <Card screenShotProject={'https://th.bing.com/th/id/OIP.Y5Ygai29oo36dlek7s7TdQHaE7?rs=1&pid=ImgDetMain'} titleProject={'Lorem Ipsum'} listTechnologies={['React', 'scss']} />
               <Card screenShotProject={'https://th.bing.com/th/id/OIP.Y5Ygai29oo36dlek7s7TdQHaE7?rs=1&pid=ImgDetMain'} titleProject={'Lorem Ipsum'} listTechnologies={['React', 'scss']} />
            </Wrapper>
        </>
    )
}

export default Projects;