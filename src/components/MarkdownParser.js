import React from "react"
import Markdown from "react-markdown"
import { CodeBlock } from "./CodeBlock"

// type Props = {
//   source?: string,
//   className?: string, // additional classes (optional)
// }

export const MarkdownParser = ({ source, className }) => {
  return (
    <Markdown
      source={source}
      renderers={{ code: CodeBlock }}
      className={`markdown ${className ? className : ""}`}
    />
  )
}
