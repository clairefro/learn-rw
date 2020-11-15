import React, { FC } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
// Couldn't figure out how to appease the typescript gods below, so ignoring...
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { tomorrow } from "react-syntax-highlighter/src/styles/prism"

interface Props {
  language?: string
  value?: string
}

export const CodeBlock: FC<Props> = ({ language, value }) => {
  // empty code blocks cause syntax highlter to crash build
  if (typeof value === "undefined") return null

  return (
    <SyntaxHighlighter language={language} style={tomorrow}>
      {value}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
