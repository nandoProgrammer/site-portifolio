const data = [
    {   
        id: 0,
        area: 'Front-End',
        technologies: [
            {
                name: 'HTML5',
                img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/html5-logo.png',
                img_size: 106,
            }, 
            {
                name: 'CSS3',
                img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/css3-logo.png',
                img_size: 106,
            }, 
            {
                name: 'JavaScript',
                img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/js5-logo.png',
                img_size: 106,
            }, 
            {
                name: 'React.js',
                img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/react-logo.png',
                img_size: 106,
            }, 
            {
                name: 'Bootstrap',
                img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/bootstrap-logo.svg',
                img_size: 106,
            }],
        projects: [
            {
                name: 'Site Hotel SummerWind feito em Bootstrap',
                description: 'Site baseado em reservas de hotel online feito no curso de Bootstrap da DevSamurai',
                technologies: ['Bootstrap', 'HTML5', 'CSS3'],
                repositoryURL: 'https://github.com/nandoProgrammer/site_bootstrap',
                icon: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg',
                job: false                
            },
            {
                name: 'Dashboard usada em Jobs',
                description: 'Base da dashboard usada em jobs para clientes reais',
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySql'],
                repositoryURL: 'https://github.com/nandoProgrammer/site_bootstrap',
                icon: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg',
                job: true            
            }
        ]
    },
    {   
        id: 1,
        area: 'Back-End',
        technologies: [
            {
               name: 'PHP',
               img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/php-logo.svg',
               img_size: 106,
            }, 
            {
               name: 'Node Js',
               img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/node-js-logo.png',
               img_size: 106,
            }, 
            { 
               name: 'MySql',
               img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/mysql-logo.png',
               img_width: 180,
               img_height: 180,
            }, 
            {
               name: 'PostgreeSql',
               img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/postgre-sql-logo.png',
               img_size: 106,
            }],
        projects: []
    },
    {
        id: 2,
        area: 'Mobile',
        technologies: [
            {
              name: 'React Native',
              img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/react-native-logo.png',
              img_size: 106,
            }],
        projects: []
    }
];

export default data;