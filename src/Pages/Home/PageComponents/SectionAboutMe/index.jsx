import React from 'react'


import { 
    Section, 
    ContentSectionAboutMe, 
    TextContent, 
    TextAboutMeTitle, 
    TextAboutMeParagraph, 
    ButtonSkills, 
    FrameBigger, 
    CircleBigger, 
    CircleSmall  
} from './style'

const SectionAboutMe = () => {
    const scrolBottom = () => {
        window.scroll(0, 900);
    }
    return (
        <Section>
            <ContentSectionAboutMe>
                <TextContent>
                    <TextAboutMeTitle>
                        Me chamo Fernando Costa e sou desenvolvedor há mais de 2 anos
                    </TextAboutMeTitle>
                    <TextAboutMeParagraph>
                        Há mais de 2 anos desenvolvo sites para clientes captados na internet e também para projetos próprios.
                        Gosto de aprender e sempre estar sendo desafiado e por isso estou em busca de novas oportunidades!
                    </TextAboutMeParagraph>
                    <ButtonSkills onClick={scrolBottom}>
                        Veja Minhas habilidades 
                    </ButtonSkills>
                </TextContent>
                <FrameBigger>
                    <CircleBigger>
                       <CircleSmall>

                       </CircleSmall>
                    </CircleBigger>
                </FrameBigger>
            </ContentSectionAboutMe>
        </Section>
    )
};

export default SectionAboutMe;