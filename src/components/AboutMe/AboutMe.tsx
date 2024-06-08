import React from 'react';
import { Wrapper, HeadingLg, Paragraph } from '../../styles/bootstrap';
import { Emphasis, Photo, SectionAboutMe } from './AboutMe.style';
const circlesLeft = require('../../assets/circles-left.png');
const photoAboutMe = require('../../assets/photo-about-me.png');

const calculateAge = (dateBirth: string): number => {
  const today = new Date();
  const birth = new Date(dateBirth);
  let age = today.getFullYear() - birth.getFullYear();
  const isBirthdayPassed =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());

  if (!isBirthdayPassed) {
    age--;
  }
    return age;
}

export const AboutMe: React.FunctionComponent = () => {
    return (
        <SectionAboutMe background={circlesLeft}>
            <Wrapper direction={'row'} justify={'space-between'} align={'start'}>
                <div>
                    <HeadingLg>
                    Olá, Tudo Bem? Prazer
                    <br/>
                    Eu Sou <Emphasis>Fernando Costa</Emphasis>
                    </HeadingLg>
                    <Paragraph>
                        Tenho {calculateAge('2001-06-15')} anos, Moro em Pernambuco <br/> e Sou Desenvolvedor FullStack há mais de 3 anos
                    </Paragraph>
                </div>
                <Photo photo={photoAboutMe} />
            </Wrapper>
        </SectionAboutMe>
    )
}

export default AboutMe;