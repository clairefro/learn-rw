// wrap all pages in PageContextProvider so ancestor componts have access to page context via hooks
import React, { FC } from "react"
import { PageContextProvider } from "./src/context/pageContext"

interface Props {
  element: JSX.Element
  // eslint-disable-next-line
  props: any
}

export const wrapPageElement: FC<Props> = ({
  element,
  props: { pageContext },
}) => {
  return (
    <PageContextProvider value={pageContext}>{element}</PageContextProvider>
  )
}
