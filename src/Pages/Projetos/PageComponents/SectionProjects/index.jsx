import React, { useState } from 'react';


let projects = [
    {
        frontend: [
            {
               name: 'Site Hotel SummerWind feito em Bootstrap',
               description: 'Site baseado em reservas de hotel online feito no curso de Bootstrap da DevSamurai',
               tecnologies: ['Bootstrap','HTML5','CSS3'],
               repositoryURL: 'https://github.com/nandoProgrammer/site_bootstrap',
               icon: ''
            }, 
        ],
        backend: [
            {

            }
        ],
        mobile: [
            {

            }
        ]
    }
];



const SectionProjects = () => {

   let technologySelected = JSON.parse(localStorage.getItem('technologySelected'));
   const [projetcsActual, setProjectsActual] = useState(technologySelected);

   let nameArea = toString(projetcsActual.area);

   //console.log(Object.keys(projects[0]));
   console.log(projects[0].nameArea)

    return(
      <h1>ok</h1>
    )
    
}

export default SectionProjects;