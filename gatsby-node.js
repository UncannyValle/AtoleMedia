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
  // const { data } = await getPageData(graphql)
  // data.blogPosts.edges.forEach(({ node }) => {
  //   const { path } = node.fields
  //   actions.createPage({
  //     path: `/blog${path}`,
  //     component: path.resolve("./src/components/templates/BlogPost.js"),
  //     context: { slug: path },
  //   })
  // })
}

//Here we are going to fetch the data from graphQL in an async function

// async function getPageData(graphql) {
//   return await graphql(`
//     {
//       blogPosts: allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `)
// }
