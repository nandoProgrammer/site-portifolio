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
                img_size: 252,
            }, 
            {
                name: 'React.js',
                img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/react-logo.png',
                img_size: 232,
            }, 
            {
                name: 'Bootstrap',
                img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/bootstrap-logo.svg',
                img_size: 147,
            }],
        projects: [
            {
                name: 'Site Hotel SummerWind feito em Bootstrap',
                description: 'Site baseado em reservas de hotel online feito no curso de Bootstrap da DevSamurai',
                technologies: ['Bootstrap', 'HTML5', 'CSS3'],
                repositoryURL: 'https://github.com/nandoProgrammer/site_bootstrap',
                icon: 'https://agenciaalgoritimo.com/imagens-tecnologias/unknown-image.png',
                img_size: 160               
            },
            {
                name: 'Dashboard usada em Jobs',
                description: 'Base da dashboard usada em jobs para clientes reais',
                technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySql'],
                repositoryURL: 'https://github.com/nandoProgrammer/site_bootstrap',
                icon: 'https://agenciaalgoritimo.com/imagens-tecnologias/unknown-image.png',
                img_size: 160          
            },
            {
                name: 'DoodleFlix',
                description: 'um site inspirado na netflix porém com os doodles do google',
                technologies: ['HTML5', 'CSS3', 'JavaScript'],
                repositoryURL: 'https://github.com/nandoProgrammer/doodleFlix',
                icon: 'https://agenciaalgoritimo.com/imagens-tecnologias/unknown-image.png',
                img_size: 160          
            },
            {
                name: 'Buscaki',
                description: 'Site que consome a Api do Google e mostra os comércios locais',
                technologies: ['React.js', 'JavaScript'],
                repositoryURL: 'https://github.com/nandoProgrammer/buscaki',
                icon: 'https://agenciaalgoritimo.com/imagens-tecnologias/unknown-image.png',
                img_size: 160         
            },
        ]
    },
    {   
        id: 1,
        area: 'Back-End',
        technologies: [
            {
               name: 'PHP',
               img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/php-logo.svg',
               img_size: 180,
            }, 
            {
               name: 'Node Js',
               img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/node-js-logo.png',
               img_size: 150,
            }, 
            { 
               name: 'MySql',
               img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/mysql-logo.png',
               img_size: 150,
            }, 
            {
               name: 'PostgreeSql',
               img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/postgre-sql-logo.png',
               img_size: 249,
            }],
        projects: [
            {
                name: 'Conexão MySql com PDO',
                description: 'Modelo de conexão segura a um banco de dados MySql usando PDO',
                technologies: ['PHP', 'MySql'],
                repositoryURL: 'https://github.com/nandoProgrammer/buscaki',
                icon: 'https://agenciaalgoritimo.com/imagens-tecnologias/unknown-image.png',
                img_size: 160         
            },
            {
                name: 'Consumo de Api Rest API do Futebol',
                description: 'Concumo de Api Rest API do futebol, onde é necessário enviar um token para autenticação',
                technologies: ['PHP'],
                repositoryURL: 'https://github.com/nandoProgrammer/consumoapidofutebol',
                icon: 'https://agenciaalgoritimo.com/imagens-tecnologias/unknown-image.png',
                img_size: 160       
            },
            {
                name: 'API simples CRUD em Node.js',
                description: 'CRUD API simples feito em Node.js',
                technologies: ['Node Js'],
                repositoryURL: 'https://github.com/nandoProgrammer/api-simples-em-node-js',
                icon: 'https://agenciaalgoritimo.com/imagens-tecnologias/unknown-image.png',
                img_size: 160       
            },
            {
                name: 'API PWA notícias',
                description: 'API criada para fornecer conteúdo para o projeto PWA notícias',
                technologies: ['Node Js'],
                repositoryURL: 'https://github.com/nandoProgrammer/api-pwa-noticias',
                icon: 'https://agenciaalgoritimo.com/imagens-tecnologias/unknown-image.png',
                img_size: 160       
            },
            {
                name: 'Encriptador cifra de César',
                description: 'Encriptador na cifra de César feito em PHP',
                technologies: ['PHP'],
                repositoryURL: 'https://github.com/nandoProgrammer/encriptador-cifra-de-cesar',
                icon: 'https://agenciaalgoritimo.com/imagens-tecnologias/unknown-image.png',
                img_size: 160       
            }
        ]
    },
    {
        id: 2,
        area: 'Mobile',
        technologies: [
            {
              name: 'React Native',
              img_url: 'https://agenciaalgoritimo.com/imagens-tecnologias/react-native-logo.png',
              img_size: 118,
            }],
        projects: []
    }
];

export default data;