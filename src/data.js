const data = [
    {   
        id: 0,
        area: 'Front-End',
        technologies: [
            {
                name: 'HTML5',
                img_name: 'html-logo.png'
            }, 
            {
                name: 'CSS3',
                img_url: 'css3-logo.png'
            }, 
            {
                name: 'JavaScript',
                img_url: 'js-logo.png'
            }, 
            {
                name: 'React.js',
                img_url: 'reactjs-logo.png'
            }, 
            {
                name: 'Bootstrap',
                img_url: 'bootstrap-logo.png'
            }],
        projects: [
            {
                name: 'Site Hotel SummerWind feito em Bootstrap',
                description: 'Site baseado em reservas de hotel online feito no curso de Bootstrap da DevSamurai',
                technologies: ['Bootstrap','HTML5','CSS3'],
                repositoryURL: 'https://github.com/nandoProgrammer/site_bootstrap',
                icon: '',
                job: false                
            },
            {
                name: 'Dashboard usada em Jobs',
                description: 'Base da dashboard usada em jobs para clientes reais',
                technologies: ['HTML5','CSS3', 'Js', 'PHP', 'MySql'],
                repositoryURL: 'https://github.com/nandoProgrammer/site_bootstrap',
                icon: '',
                job: true            
            }
        ]
    },
    {   
        id: 1,
        area: 'Back-End',
        technologies: [
            {
               name: 'PHP'
            }, 
            {
               name: 'Node Js'
            }, 
            { 
               name: 'MySql'
            }, 
            {
               name: 'PostgreeSql'
            }],
        projects: []
    },
    {
        id: 2,
        area: 'Mobile',
        technologies: [
            {
              name: 'React Native'
            }],
        projects: []
    }
];

export default data;