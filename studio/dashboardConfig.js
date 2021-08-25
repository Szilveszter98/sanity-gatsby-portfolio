export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '612601cd481559b8f4e39b1c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2i6w79fg',
                  apiId: '532b233f-7483-4cd3-bf04-cfc34e5c9705'
                },
                {
                  buildHookId: '612601cd93edbd8b58a03bef',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-sj5fcwwi',
                  apiId: '2f12882d-b8f8-40fe-88c1-2b48836b20f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Szilveszter98/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-sj5fcwwi.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
