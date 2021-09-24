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
    return (
        <Section>
            <ContentSectionAboutMe>
                <TextContent>
                    <TextAboutMeTitle>
                        Lorem ipsum door sit amet
                    </TextAboutMeTitle>
                    <TextAboutMeParagraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tristique leo. Duis pulvinar condimentum est, ac accumsan elit sollicitudin et. Vestibulum aliquet vestibulum felis varius ultrices. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tristique leo. Duis pulvinar condimentum est, ac accumsan elit sollicitudin et. Vestibulum aliquet vestibulum felis varius ultrices.  
                    </TextAboutMeParagraph>
                    <ButtonSkills>
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