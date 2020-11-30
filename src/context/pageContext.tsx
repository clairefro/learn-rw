import React, { createContext, useContext } from "react"

// TODO: how to link this with context defined in gatsby-node.js?
export interface IPageContext {
  slug: string
  lang: Languages
  isUntranslated: boolean
  id: string
}

// eslint-disable-next-line
export const PageContext = createContext({})

// TODO: better typing
/* eslint-disable @typescript-eslint/no-explicit-any */
export const PageContextProvider: any = ({
  value: pageContext,
  children,
}: any): any => {
  return (
    <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>
  )
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// TODO: better typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePageContext = (): any => useContext(PageContext)
