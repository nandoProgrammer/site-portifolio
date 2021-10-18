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
  ImgItem,
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
                      <CircleBox>
                        {
                           item.icon !== null ? <ImgItem src={item.icon} width={180} height={180} /> : <span>ok</span>
                        }
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
                     <TextEmpty>Aguarde os próximos projetos...</TextEmpty>
                  </BoxTextEmpty>
                </BoxEmpty>
            )
          } 
        </ContainerBoxProjects >
    )    
};

export default SectionProjects;
