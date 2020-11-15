import React, { createContext, useContext } from "react"

const PageContext = createContext({})

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
