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
   console.log(technologySelected);
   const selectProjects = data.forEach((item) => {
      item.projects.forEach(project => 
        project.technologies.forEach((technology) => {
          if(technology === technologySelected.actualTechnology){
            projectsSelected.push(project);
          }
        })
      );
   });

   const areaActual = data.filter(item => item.area === technologySelected.area);
   

    return(
        <ContainerBoxProjects >
         {  
            projectsSelected.length !== 0 ? projectsSelected.map((item) => (
                <>
                  <Box>
                      <CircleBox>
                          
                      </CircleBox>
                      <TitleBox>{item.name}</TitleBox>
                      <BarLinksBox>
                          <ButtonBox href="">
                             Ver Projetos
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
