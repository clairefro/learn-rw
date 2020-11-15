import React, { FC } from "react"
import { LanguageSwitcher } from "./LanguageSwitcher"
import logo from "../assets/logo.svg"

export const Nav: FC = () => {
  return (
    <header className="shadow sticky w-full p-4 flex justify-between">
      <div className="flex items-center">
        <img src={logo} className="w-8" />
        <span className="ml-2">Learn RedwoodJS</span>
      </div>
      <LanguageSwitcher />
    </header>
  )
}
