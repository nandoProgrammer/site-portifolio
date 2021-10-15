const data = [
    {   
        id: 0,
        area: 'Front-End',
        technologies: [
            {
                name: 'HTML5',
                img_url: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg'
            }, 
            {
                name: 'CSS3',
                img_url: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg'
            }, 
            {
                name: 'JavaScript',
                img_url: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg'
            }, 
            {
                name: 'React.js',
                img_url: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg'
            }, 
            {
                name: 'Bootstrap',
                img_url: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg'
            }],
        projects: [
            {
                name: 'Site Hotel SummerWind feito em Bootstrap',
                description: 'Site baseado em reservas de hotel online feito no curso de Bootstrap da DevSamurai',
                technologies: ['Bootstrap','HTML5','CSS3'],
                repositoryURL: 'https://github.com/nandoProgrammer/site_bootstrap',
                icon: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg',
                job: false                
            },
            {
                name: 'Dashboard usada em Jobs',
                description: 'Base da dashboard usada em jobs para clientes reais',
                technologies: ['HTML5','CSS3', 'Js', 'PHP', 'MySql'],
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