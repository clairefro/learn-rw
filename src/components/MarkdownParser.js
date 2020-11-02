import React from "react"
import Markdown from "react-markdown"
import { CodeBlock } from "./CodeBlock"

export const MarkdownParser = ({ source, className }) => {
  return (
    <Markdown
      source={source}
      renderers={{ code: CodeBlock }}
      allowDangerousHtml={true}
      className={`markdown ${className ? className : ""}`}
    />
  )
}
