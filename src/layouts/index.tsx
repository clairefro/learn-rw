import React, { FC } from "react"
import { LanguageContextProvider } from "../context/languageContext"
import { PageProps } from "gatsby"
import { Nav } from "../components/Nav"

import "../styles/index.css"

const Layout: FC<PageProps> = ({ children }) => {
  return (
    <LanguageContextProvider>
      <div>
        <Nav />
        <div className="max-w-screen-md container mx-auto p-6">{children}</div>
      </div>
    </LanguageContextProvider>
  )
}

export default Layout
