import React from "react"
import { graphql } from "gatsby"
import { MarkdownParser } from "../components/MarkdownParser"

export default function DocPage({ data, pageContext }) {
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
