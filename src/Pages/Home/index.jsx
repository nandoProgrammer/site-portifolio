import React from 'react'

import Header from '../../Components/Header'
import SectionAboutMe from '../../Components/SectionAboutMe'
import SkillsSection from '../../Components/SkillsSection'

import { Wrapper } from './style'


const Home = () => {
    return (
        <Wrapper>
           <Header logo={'Fernando Costa'} links={[{name:'1', logo:'Github'}, {name:'2', logo:'Linkedin'}]} />
           <SectionAboutMe />
           <SkillsSection />
        </Wrapper>
    )
}

export default Home;
