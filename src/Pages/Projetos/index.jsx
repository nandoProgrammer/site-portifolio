import React, { useState } from 'react';
import Header from '../../Components/Header';
import SectionProjects from './PageComponents/SectionProjects'
import { Wrapper } from './../style';


const Projetos = () => {


    return(
        <Wrapper>
           <Header logo={'Fernando Costa'} links={[{name:'1', logo:'Github'}, {name:'2', logo:'Linkedin'}]} />
           <SectionProjects />
        </Wrapper>
    )
    
}

export default Projetos;