let projects = [
    {
        area: 'Front-End',
        projects: [
            {
               name: 'Site Hotel SummerWind feito em Bootstrap',
               description: 'Site baseado em reservas de hotel online feito no curso de Bootstrap da DevSamurai',
               tecnologies: ['Bootstrap','HTML5','CSS3'],
               repositoryURL: 'https://github.com/nandoProgrammer/site_bootstrap',
               icon: '',
               job: false
            }
       ]
    },
    {
        area: 'Back-End',
         projects: []
    },
    {
        area: 'Mobile',
         projects: []
    }
];


const SectionProjects = () => {

   let technologySelected = JSON.parse(localStorage.getItem('technologySelected'));

   const areaActual = projects.filter(item => item.area === technologySelected.area);
   const projectsSelected = areaActual[0].projects;  
  

    return(
        <>
         {  
            projectsSelected.length !== 0 ? projectsSelected.map((item) => (
                <>
                  <span>{item.name}</span>
                </>
            )):(
                //Aqui vai uma imagem de 404
                <h2>Nada Aqui</h2>
            )
          } 
        </>
    )    
};

export default SectionProjects;