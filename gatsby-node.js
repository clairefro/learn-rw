const { config } = require("./config")
const { parseNode } = require("./buildUtils")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetPageDataForBuild {
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

  const normalizedNodes = JSON.parse(
    JSON.stringify(result.data.allMarkdownRemark.nodes)
  )
  const pageTemplate = require.resolve(`./src/templates/Page.tsx`)

  console.log(`Building pages from src/${config.docsSourceDir}...`)
  normalizedNodes.forEach(node => {
    // skip page creation if not markdown file
    if (!node.fileAbsolutePath.match(/.md$/)) return

    const { path, lang, slug } = parseNode(node)
    if (!path) {
      return console.error(
        `Error! unable to create page for: ${node.fileAbsolutePath}`
      )
    }
    createPage({
      path: path,
      component: pageTemplate,
      context: {
        // additional data can be passed via context
        slug,
        lang,
        id: node.id,
      },
    })
  })
  console.log(`Done building pages.`)
}
