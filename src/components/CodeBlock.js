import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/src/styles/prism"

export const CodeBlock = ({ language = null, value }) => {
  // empty code blocks cause syntax highlter to crash build
  if (typeof value === "undefined") return null

  return (
    <SyntaxHighlighter language={language} style={tomorrow}>
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
