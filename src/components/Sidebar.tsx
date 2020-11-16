import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { config } from "../../config"
import { useLanguageContext } from "../context/languageContext"
import { Link } from "gatsby"

interface SidebarLinkPaths {
  [key: string]: {
    sectionTitle: {
      [key in Languages]: string
    }
    paths: string[]
  }
}

// Use this object to determine the sidebar section and article order.
// Articles will appear in the order of the paths array under each heading.
// Paths must exactly match the markdown filepath without extension, starting from the first directory after the language
// ex: "tutorial/welcome-to-redwood"
const linkPaths: SidebarLinkPaths = {
  Tutorial: {
    sectionTitle: {
      en: "Tutorial",
      fr: "Didacticiel",
    },
    paths: [
      "tutorial/welcome-to-redwood",
      "tutorial/installation-and-starting-development",
      "tutorial/our-first-page",
    ],
  },
}

export const Sidebar: FC = () => {
  const { selectedLang } = useLanguageContext()

  // get all markdown files in content dir
  const data = useStaticQuery(graphql`
    query SidebarDataQuery {
      allMarkdownRemark {
        nodes {
          fileAbsolutePath
          headings {
            value
          }
        }
      }
    }
  `)

  const queryResults = allPathsAndTitles(data)
  const sidebarObj = buildSidebarLinks(linkPaths, queryResults)

  const renderSidebarContent = () =>
    sidebarObj[selectedLang].map(item => (
      <section key={item.section} style={{ width: "250px" }}>
        <details open className="w-full">
          {" "}
          <summary className="font-semibold text-xl w-full my-2">
            {item.section}
          </summary>
          <ul className="ml-4">
            {item.pages.map((page, i) => (
              <Link key={i} to={page.path}>
                <li className="ml-2 mb-2">{page.title}</li>
              </Link>
            ))}
          </ul>
        </details>
      </section>
    ))
  return (
    <aside
      className="h-screen px-4 py-6 relative"
      style={{ minWidth: "250px" }}
    >
      <div className="fixed " style={{ width: "inherit" }}>
        {renderSidebarContent()}
      </div>
    </aside>
  )
}

/////////////////////////////////////////////
// Helper logic below
/////////////////////////////////////////////

interface SidebarDataQueryResultsRaw {
  allMarkdownRemark: {
    nodes: {
      fileAbsolutePath: string
      headings: { value: string }[]
    }[]
  }
}
interface SidebarDataQueryResult {
  path: string
  title: string
}

const allPathsAndTitles = (
  data: SidebarDataQueryResultsRaw
): SidebarDataQueryResult[] => {
  const {
    allMarkdownRemark: { nodes },
  } = data
  return nodes.map(n => ({
    path: toRelativePath(n.fileAbsolutePath),
    title: n.headings[0]?.value || "undefined",
  }))
}

// make absolute paths to generated pages internally linkable
const toRelativePath = (path: string): string => {
  const pattern = "\\S+" + `/src/${config.docsSourceDir}` // capture all path up to language prefix
  return path.replace(new RegExp(pattern), "").replace(/.md$/, "")
}

interface Page {
  title: string
  path: string
}

// note: defining as type instead of interface to allow this key typing
type FinalSideBarLinkObj = {
  [key in Languages]: {
    section: string
    pages: Page[]
  }[]
}

const buildSidebarLinks = (
  data: SidebarLinkPaths,
  queryResults: SidebarDataQueryResult[]
): FinalSideBarLinkObj => {
  // TODO: dynamically populate the languages
  const langs: Languages[] = ["en", "fr"]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sidebarLinks: any = {}
  langs.forEach(lang => {
    sidebarLinks[lang] = Object.keys(data).map(key => ({
      section: data[key].sectionTitle[lang],
      pages: pathsToPages(data[key].paths, lang, queryResults),
    }))
  })
  return sidebarLinks as FinalSideBarLinkObj
}

const pathsToPages = (
  paths: string[],
  lang: Languages,
  queryResults: SidebarDataQueryResult[]
): Page[] => {
  const results: Page[] = []
  paths.forEach(path => {
    const prefixedPath = ["/", lang, "/", path].join("")
    const foundIndex = queryResults.findIndex(obj =>
      obj.path.match(prefixedPath)
    )
    const foundIndexEn = queryResults.findIndex(obj =>
      obj.path.match(["en", "/", path].join(""))
    )

    let title: string
    let resolvedPath: string
    // case: page for this language exists
    if (foundIndex >= 0) {
      title = queryResults[foundIndex].title
      resolvedPath = queryResults[foundIndex].path
    }
    // if not, default to English
    else if (foundIndexEn >= 0) {
      title = "(🇬🇧)" + queryResults[foundIndexEn].title
      resolvedPath = queryResults[foundIndexEn].path
    } else {
      throw new Error(`Path not found when building the sidebar: ${path}`)
    }
    const page = { title, path: resolvedPath }
    results.push(page)
  })
  return results
}
