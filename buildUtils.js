const { config } = require("./config")

const getRelativePath = absolutePath => {
  const relPathMatch = absolutePath.match(
    new RegExp(`/${config.docsSourceDir}(\/.+).md$`)
  )
  if (relPathMatch) {
    return relPathMatch[1]
  } else {
    console.error(`Something fishy with absolute path: ${absolutePath}`)
    return null
  }
}

const getLang = path => {
  let lang = "en" // default
  const langPrefixMatches = path.match(/^\/(.+)\/.+/)
  if (langPrefixMatches) {
    return langPrefixMatches[1]
  } else {
    console.error(`No language prefix found for ${path}. Defaulting to ${lang}`)
    return lang
  }
}

const getSlug = path => {
  const slugMatch = path.match(/\/(.+)\.?.+$/)
  if (slugMatch) {
    return slugMatch[1]
  } else {
    console.error(`Unable to determine slug for path: ${path}`)
    return null
  }
}

const parseNode = node => {
  const path = getRelativePath(node.fileAbsolutePath)
  const lang = path ? getLang(path) : null
  const slug = path ? getSlug(path) : null
  return { path, lang, slug }
}

exports.parseNode = parseNode
