export default {
  widgets: [
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
                  buildHookId: '5eb715f46b524cb1b6592176',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zyue57pf',
                  apiId: 'ce74e7a7-4e4f-4955-811e-bc30315325e5'
                },
                {
                  buildHookId: '5eb715f455780effab01a59d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qywugd8o',
                  apiId: 'e10577ed-290f-43eb-91da-d49557a34fe8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joestartreck/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qywugd8o.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
