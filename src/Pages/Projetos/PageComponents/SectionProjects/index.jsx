import React from 'react';


let projects = [
    {
        area: 'Front-End',
        projects: [
            {
               name: 'Site Hotel SummerWind feito em Bootstrap',
               description: 'Site baseado em reservas de hotel online feito no curso de Bootstrap da DevSamurai',
               tecnologies: ['Bootstrap','HTML5','CSS3'],
               repositoryURL: 'https://github.com/nandoProgrammer/site_bootstrap',
               icon: ''
            },
            {
                name: 'Site Hotel SummerWind feito em HTML',
                description: 'Site baseado em reservas de hotel online feito no curso de Bootstrap da DevSamurai',
                tecnologies: ['Bootstrap','HTML5','CSS3'],
                repositoryURL: 'https://github.com/nandoProgrammer/site_bootstrap',
                icon: ''
             }
       ]
    },
    {
        area: 'backend',
        projects: [{name:'nada'}]
    },
    {
        area: 'mobile',
        projects: [{name: 'nada'}]
    }
];



const SectionProjects = () => {

   let technologySelected = JSON.parse(localStorage.getItem('technologySelected'));

   const areaActual = projects.filter(item => item.area === technologySelected.area);
   console.log(areaActual);
   const projectsSelected = areaActual[0].projects;
  
  

    return(
        <>
          {  
            projectsSelected.map((item) => (
                <>
                  <span>{item.name}</span>
                </>
            ))
          } 
        </>
    )
        
    
            
    
}

export default SectionProjects;