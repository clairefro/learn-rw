import React, { FC } from "react"
import { PageProps } from "gatsby"

import "../styles/index.css"

const Layout: FC<PageProps> = ({ children }) => {
  return (
    <div>
      <div className="max-w-screen-md container mx-auto p-6">{children}</div>
    </div>
  )
}

export default Layout
