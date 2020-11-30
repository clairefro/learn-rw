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

  const normalizedPageNodes = JSON.parse(
    JSON.stringify(result.data.allMarkdownRemark.nodes)
  )

  // filter to only markdown files in case some junk present
  const markdownNodes = normalizedPageNodes.filter(node =>
    node.fileAbsolutePath.match(/.md$/)
  )

  // extract lang, slug and path from the filepath. Append the markdown id
  const parsedMarkdownNodes = markdownNodes.map(node => ({
    ...parseNode(node),
    id: node.id,
  }))

  // filter down to nodes containing valid paths
  const validParsedMarkdownNodes = parsedMarkdownNodes.filter(node => {
    if (!node.path) {
      console.error(
        `Error! unable to create page for: ${node.fileAbsolutePath}. Path not parsed correctly`
      )
      return false
    }
    return true
  })

  const pageTemplate = require.resolve(`./src/templates/Page.tsx`)

  if (validParsedMarkdownNodes.length) {
    // First, create pages for all paths found in default language directory for all other available languages. These will be default pages.
    // These all have the property isUntranslated: true and point to markdown with id of default language markdown
    console.log(
      `Building all default paths assuming default language: `,
      config.defaultLang
    )

    const defaultNodes = validParsedMarkdownNodes.filter(
      node => node.lang === config.defaultLang
    )

    defaultNodes.forEach(node => {
      config.publishableLangs.forEach(lang => {
        const newPath = node.path.replace(
          new RegExp(`/${config.defaultLang}/`),
          `/${lang}/`
        )
        createPage({
          path: newPath,
          component: pageTemplate,
          context: {
            // additional data can be passed via context
            slug: node.slug,
            lang,
            id: node.id,
            isUntranslated: true,
          },
        })
      })
    })

    // Overwrite with pages that contain translations (i.e. exist in source content dir)
    console.log(`Building pages from src/${config.docsSourceDir}...`)
    validParsedMarkdownNodes.forEach(node => {
      const { path, lang, slug, id } = node
      console.log("->", path)
      createPage({
        path: path,
        component: pageTemplate,
        context: {
          // additional data can be passed via context
          slug,
          lang,
          id: id,
          isUntranslated: false,
        },
      })
    })
    console.log(`Done building pages.`)
  } else {
    console.log(
      `No pages created as no markdown files found in src/${config.docsSourceDir}.`
    )
  }
}
