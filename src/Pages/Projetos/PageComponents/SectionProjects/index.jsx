import NadaAqui from '../../../../Lotties/Carregando';

import { 
    ContainerBoxProjects, 
    BoxProject, 
    BoxEmpty, 
    BoxTextEmpty, 
    TextEmpty,
    ImageProject,
    TitleProject,
    ButtonLinkProject
} from './style';

import data from './../../../../data';

const SectionProjects = () => {

   let technologySelected = JSON.parse(localStorage.getItem('technologySelected'));

   const areaActual = data.filter(item => item.area === technologySelected.area);
   const projectsSelected = areaActual[0].projects;  
  

    return(
        <ContainerBoxProjects >
         {  
            projectsSelected.length !== 0 ? projectsSelected.map((item) => (
                <>
                  <BoxProject>
                      <ImageProject>
                        
                      </ImageProject>
                      <TitleProject>
                        {item.name}
                      </TitleProject>
                      <ButtonLinkProject>
                        Ver Projeto
                      </ButtonLinkProject>
                  </BoxProject>
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
