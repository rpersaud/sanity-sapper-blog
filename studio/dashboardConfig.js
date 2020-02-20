export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5e4e10bef340832bfb28f52a',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-1ujcybyh',
                  apiId: '18fa7d66-681a-4e4d-b1b2-c68ae4801b48'
                },
                {
                  buildHookId: '5e4e10bef3408380fc28f554',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-6dhaiwjo',
                  apiId: '9dd1b8d2-7a4b-422b-9223-ad6690251232'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rpersaud/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-6dhaiwjo.netlify.com', category: 'apps'}
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
