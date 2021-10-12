import React from 'react'

import Header from '../../Components/Header'
import SectionAboutMe from './PageComponents/SectionAboutMe'
import SkillsSection from './PageComponents/SkillsSection'

import { Wrapper } from './../style'

const Home = () => {
    return (
        <Wrapper>
           <Header />
           <SectionAboutMe />
           <SkillsSection />
        </Wrapper>
    )
}

export default Home;
