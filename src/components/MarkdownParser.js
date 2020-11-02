import React from "react"
import Markdown from "react-markdown"

// type Props = {
//   source?: string,
//   className?: string, // additional classes (optional)
// }

export const MarkdownParser = ({ source, className }) => {
  return (
    <Markdown
      source={source}
      className={`markdown ${className ? className : ""}`}
    />
  )
}
