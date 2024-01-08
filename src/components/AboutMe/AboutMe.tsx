import React from 'react';
import { Wrapper, HeadingLg, Paragraph } from '../../styles/bootstrap';
import { Emphasis, Photo, SectionAboutMe } from './AboutMe.style';
const circlesLeft = require('../../assets/circles-left.png');
const photoAboutMe = require('../../assets/photo-about-me.png');

const calculateAge = (dateBirth: string) => {
    const today: Date = new Date();
    const birth = new Date(dateBirth);
    let age: number = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
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