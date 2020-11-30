import React, { FC, useContext } from "react"
import { graphql, PageProps } from "gatsby"
import { MarkdownParser } from "../components/MarkdownParser"
import { SEO } from "../components/SEO"
import { UntranslatedContentNotice } from "../components/UntranslatedContentNotice"
import { IPageContext, PageContext } from "../context/pageContext"

interface PageQuery {
  data: {
    markdownRemark: {
      id: string
      rawMarkdownBody: string
      headings: {
        value: string
      }[]
    }
  }
}
const Page: FC<PageProps & PageQuery> = ({ data }) => {
  const pageContext = useContext(PageContext) as IPageContext
  const { markdownRemark } = data
  const { headings, rawMarkdownBody } = markdownRemark
  const { isUntranslated, lang } = pageContext

  const title = headings[0]?.value

  return (
    <>
      <SEO title={title} />
      <div>
        {isUntranslated && <UntranslatedContentNotice lang={lang} />}
        <MarkdownParser source={rawMarkdownBody} />
      </div>
    </>
  )
}
export const pageQuery = graphql`
  query GetPageData($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      rawMarkdownBody
      headings {
        value
      }
    }
  }
`
export default Page
