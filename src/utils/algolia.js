const indexName = `Pages`

const pageQuery = `query search {
  pages: allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          description
          author
          path
          genre
          date(formatString: "MMM D, YYYY")
          image {
            childImageSharp {
              fixed(width: 300, fit: COVER) {
                base64
              }
            }
          }

        }
        timeToRead
      }
    }
  }
}
`
function pageToAlgoliaRecord({ node: { id, frontmatter, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...rest,
  }
}
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: ["description:20", "title"] },
  },
]
module.exports = queries
