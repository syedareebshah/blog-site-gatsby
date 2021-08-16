var path = require('path');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const result = await graphql(`
    {
        allContentfulBlogPost {
            edges {
              node {
                date
                title
                image {
                  title
                  fixed {
                    src
                  }
                }
                blogText {
                  json
                }
              }
            }
          }
    }
    `)

    // console.log(JSON.stringify(result.data.allContentfulBlogPost.edges,"hahahaa........"));

    result.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            path: `/Blog/${edge.node.title}`,
            component: path.resolve('./src/templates/dynamic-page.tsx'),
            context: {
                itemDetails:edge.node
            }
        })
    })

}