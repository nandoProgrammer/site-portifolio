import React, {useState} from 'react'

import TitleSection from '../../../../Components/TitleSection';

import { 
    WrapperSkillsButton, 
    WrapperSkills, 
    ButtonItem, 
    BoxTechnology, 
    CircleBoxTechnology, 
    TitleTechnology, 
    BarLinksTechnology, 
    ButtonTechnology 
} from './style'

import data from './../../../../data';
 


const SkillsSection = () => {

    const [actualSkill, setActualSkill] = useState(data[0]);
    
    const SelectSkill = (id) => {
        setActualSkill(data[id]);
    }

    const setTechnologyOnLocalStorage = (technology) => {
         let dataSelected = JSON.stringify({ actualTechnology: technology, area: actualSkill.area });
         localStorage.setItem('technologySelected', dataSelected);
         window.location.href="projetos";
    }


    return (
        <>  
            <TitleSection>
                Minhas Habilidades
            </TitleSection>
            <WrapperSkillsButton>
                {
                    data.map((skill) => (
                        <>
                            <ButtonItem onClick={() => SelectSkill(skill.id)}>{skill.area}</ButtonItem>
                        </>
                    ))
                }
            </WrapperSkillsButton>
            <WrapperSkills>
                {
                    actualSkill['technologies'].map((item) => (
                        <>
                           <BoxTechnology>
                               <CircleBoxTechnology />
                               <TitleTechnology>{item}</TitleTechnology>
                               <BarLinksTechnology>
                                   <ButtonTechnology onClick={() => setTechnologyOnLocalStorage(item)}>
                                      Ver Projetos
                                   </ButtonTechnology>
                               </BarLinksTechnology>
                           </BoxTechnology>
                        </>
                    ))
                }
        </WrapperSkills>
    </>
    )
}

export default SkillsSection;