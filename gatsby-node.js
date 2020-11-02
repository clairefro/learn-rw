exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          fileAbsolutePath
          rawMarkdownBody
          id
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const parsedMdNodes = JSON.parse(
    JSON.stringify(result.data.allMarkdownRemark.nodes)
  )
  console.log({ parsedMdNodes })
  const docPage = require.resolve(`./src/templates/DocPage.js`)

  parsedMdNodes.forEach(node => {
    const path = node.fileAbsolutePath.match(/\/content(\/.+).md$/)[1]
    console.log({ path })
    // TODO: handle case where no lang prefix
    const lang = path.match(/^\/(.+)\/.+/)[1]
    const slug = path.match(/\/(.+)$/)[1]

    createPage({
      path: path,
      component: docPage,
      context: {
        // additional data can be passed via context
        slug,
        lang,
        id: node.id,
      },
    })
  })
}
