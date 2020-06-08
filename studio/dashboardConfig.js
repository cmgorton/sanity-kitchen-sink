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
                  buildHookId: '5ede38665ba4bd7558b70d7a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vy4juiwj',
                  apiId: '70876445-1401-4c83-aae7-cfa300165581'
                },
                {
                  buildHookId: '5ede3866cdbf8086babc4464',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-z8m66n3j',
                  apiId: '1e4bb2fe-859e-4599-894b-fd4bf6a07c8d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cmgorton/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-z8m66n3j.netlify.app', category: 'apps'}
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
