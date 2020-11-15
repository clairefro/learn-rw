import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"
import { MarkdownParser } from "../components/MarkdownParser"

const DocPage: FC<PageProps> = ({ data, pageContext }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { rawMarkdownBody } = markdownRemark
  return (
    <div>
      <MarkdownParser source={rawMarkdownBody} />
    </div>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      rawMarkdownBody
    }
  }
`
export default DocPage
