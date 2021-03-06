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
                           item.icon !== null ? <ImgItem image={item.icon} size={item.img_size} /> : null
                        }
                      </CircleBox>
                      <TitleBox>{item.name}</TitleBox>
                      <BarLinksBox>
                          <ButtonBox href={item.repositoryURL} target="_blank">
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
