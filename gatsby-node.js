const path = require(`path`)


//In here we create the blog post page using the markdown data created in the CMS
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.path}`,
      component: path.resolve("./src/components/templates/BlogPost.js"),
      context: {slug: node.frontmatter.path}
    })
  })
  
}

