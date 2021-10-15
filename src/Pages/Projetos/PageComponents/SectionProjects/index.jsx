import NadaAqui from '../../../../Lotties/Carregando';

import { 
    ContainerBoxProjects, 
    BoxEmpty, 
    BoxTextEmpty, 
    TextEmpty
} from './style';

import {
  Box, 
  CircleBox, 
  TitleBox, 
  BarLinksBox, 
  ButtonBox,
} from '../../../style';

import data from './../../../../data';

const SectionProjects = () => {
  let projectsSelected = []; 
  let technologySelected = JSON.parse(localStorage.getItem('technologySelected'));
   
   data.forEach((item) => {
      item.projects.forEach(project => 
        project.technologies.forEach((technology) => {
          if(technology === technologySelected.actualTechnology){
            projectsSelected.push(project);
          }
        })
      );
   });

  
   

    return(
        <ContainerBoxProjects >
         {  
            projectsSelected.length !== 0 ? projectsSelected.map((item) => (
                <>
                  <Box>
                      <CircleBox image={item.icon}>
                          
                      </CircleBox>
                      <TitleBox>{item.name}</TitleBox>
                      <BarLinksBox>
                          <ButtonBox href="">
                             Ver Projeto
                          </ButtonBox>
                      </BarLinksBox>
                  </Box>
                </>
            )):(
                <BoxEmpty>
                  <NadaAqui />
                  <BoxTextEmpty>
                     <TextEmpty>Carregando...</TextEmpty>
                  </BoxTextEmpty>
                </BoxEmpty>
            )
          } 
        </ContainerBoxProjects >
    )    
};

export default SectionProjects;
