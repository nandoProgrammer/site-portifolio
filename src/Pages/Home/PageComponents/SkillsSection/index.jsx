import React, {useState} from 'react'

import TitleSection from '../../../../Components/TitleSection';

import { 
    WrapperSkillsButton, 
    WrapperSkills, 
    ButtonItem, 
    ButtonActive,
    BoxTechnology, 
    CircleBoxTechnology, 
    TitleTechnology, 
    BarLinksTechnology, 
    ButtonTechnology,
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
         console.log(technology);
         window.location.href="projetos";
    }


    return (
        <a id="habilidades">  
            <TitleSection>
                Minhas Habilidades
            </TitleSection>
            <WrapperSkillsButton>
                {
                    data.map((skill) => (
                        <> 
                        {
                           skill.area === actualSkill.area ? 
                              <ButtonActive onClick={() => SelectSkill(skill.id)}>{skill.area}</ButtonActive> 
                              :
                              <ButtonItem onClick={() => SelectSkill(skill.id)}>{skill.area}</ButtonItem>
                        }
                            
                        </>
                    ))
                }
            </WrapperSkillsButton>
            <WrapperSkills>
                {
                    actualSkill['technologies'].map((item) => (
                        <>
                           <BoxTechnology>
                               <CircleBoxTechnology>
                                   <img src={item.img_name} />
                               </CircleBoxTechnology>
                               <TitleTechnology>{item.name}</TitleTechnology>
                               <BarLinksTechnology>
                                   <ButtonTechnology onClick={() => setTechnologyOnLocalStorage(item.name)}>
                                      Ver Projetos
                                   </ButtonTechnology>
                               </BarLinksTechnology>
                           </BoxTechnology>
                        </>
                    ))
                }
        </WrapperSkills>
    </a>
    )
}

export default SkillsSection;