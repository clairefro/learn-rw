import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"
import { MarkdownParser } from "../components/MarkdownParser"
import { SEO } from "../components/SEO"

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
const Page: FC<PageProps & PageQuery> = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { headings, rawMarkdownBody } = markdownRemark

  const title = headings[0]?.value

  return (
    <>
      <SEO title={title} />
      <div>
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
