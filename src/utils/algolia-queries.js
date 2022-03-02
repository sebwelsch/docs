// const escapeStringRegexp = require("escape-string-regexp")
// const pagePath = `src/pages`
const pageQuery = `{
  pages: allMdx {
    edges {
      node {
        id
        frontmatter {
          product
          title
          category
          subtitle
        }
        slug
        excerpt(pruneLength: 500)
      }
    }
  }
}`
function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
    _tags: (frontmatter.product ? [frontmatter.product] : []).concat(frontmatter.category ? [frontmatter.category] : [])
  }
}
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME || 'test',
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]
module.exports = queries