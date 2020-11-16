import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"
import { MarkdownParser } from "../components/MarkdownParser"

interface PageQuery {
  data: {
    markdownRemark: {
      id: string
      rawMarkdownBody: string
    }
  }
}
const Page: FC<PageProps & PageQuery> = ({ data, pageContext }) => {
  const {
    markdownRemark: { rawMarkdownBody },
  } = data

  return (
    <div>
      <MarkdownParser source={rawMarkdownBody} />
    </div>
  )
}
export const pageQuery = graphql`
  query GetPageData($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      rawMarkdownBody
    }
  }
`
export default Page
