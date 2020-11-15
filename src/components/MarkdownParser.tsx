import React, { FC } from "react"
import Markdown from "react-markdown"
import { CodeBlock } from "./CodeBlock"

interface Props {
  source: string
  className?: string
}

export const MarkdownParser: FC<Props> = ({ source, className }) => {
  return (
    <Markdown
      source={source}
      renderers={{ code: CodeBlock }}
      allowDangerousHtml={true}
      className={`markdown ${className ? className : ""}`}
    />
  )
}
