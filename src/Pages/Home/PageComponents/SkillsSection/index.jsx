import React, {useState} from 'react'

import TitleSection from '../../../../Components/TitleSection';

import { WrapperSkillsButton, WrapperSkills, ButtonItem, BoxTechnology, CircleBoxTechnology, TitleTechnology } from './style'

let skills = [
    {
        id: 0,
        name:'Front-End',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap']
    },
    {
        id: 1,
        name:'Back-End',
        technologies: ['PHP', 'Node Js']
    },
    {
        id: 2,
        name:'Mobile',
        technologies: ['React Native']
    }

];


const SkillsSection = () => {

    const [actualSkill, setActualSkill] = useState(skills[0]);
    
    const SelectSkill = (id) => {
        setActualSkill(skills[id]);
    }


    return (
        <>  
            <TitleSection>
                Minhas Habilidades
            </TitleSection>
            <WrapperSkillsButton>
                {
                    skills.map((skill) => (
                        <>
                            <ButtonItem onClick={() => SelectSkill(skill.id)}>{skill.name}</ButtonItem>
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
                           </BoxTechnology>
                        </>
                    ))
                }
        </WrapperSkills>
    </>
    )
}

export default SkillsSection;