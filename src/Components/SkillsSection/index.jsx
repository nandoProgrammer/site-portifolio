import React, {useState} from 'react'

import { WrapperSkills, ButtonItem } from './style'

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
        technologies: ['React-native']
    }

];


const SkillsSection = () => {

    const [actualSkill, setActualSkill] = useState(skills[0]);
    
    const SelectSkill = (id) => {
        setActualSkill(skills[id]);
    }


    return (
        <>
            <WrapperSkills>
                {
                    skills.map((skill) => (
                        <>
                            <ButtonItem onClick={() => SelectSkill(skill.id)}>{skill.name}</ButtonItem>
                        </>
                    ))
                }
            </WrapperSkills>
            <WrapperSkills>
                {
                    actualSkill['technologies'].map((item) => (
                        <>
                           <span>{item}</span>
                        </>
                    ))
                }
        </WrapperSkills>
    </>
    )
}

export default SkillsSection;