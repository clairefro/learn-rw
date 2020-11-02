import React from "react"

import "../styles/index.css"

const Layout = ({ children }) => {
  return (
    <div>
      <div className="max-w-screen-md container mx-auto">{children}</div>
    </div>
  )
}

export default Layout
