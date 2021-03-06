import React, {useState} from 'react'

import TitleSection from '../../../../Components/TitleSection';

import { 
    WrapperSkillsButton, 
    WrapperSkills, 
    ButtonItem, 
    ButtonActive,
} from './style'

import {
    Box, 
    CircleBox, 
    ImgItem,
    TitleBox, 
    BarLinksBox, 
    ButtonBox,
} from '../../../style';


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
        <>  
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
                           <Box>
                               <CircleBox>
                                   {
                                       item.img_url ? <ImgItem image={item.img_url} size={item.img_size} /> : null
                                   }
                               </CircleBox>
                               <TitleBox>{item.name}</TitleBox>
                               <BarLinksBox>
                                   <ButtonBox onClick={() => setTechnologyOnLocalStorage(item.name)}>
                                      Ver Projetos
                                   </ButtonBox>
                               </BarLinksBox>
                           </Box>
                        </>
                    ))
                }
        </WrapperSkills>
    </>
    )
}

export default SkillsSection;