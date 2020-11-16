import React, { FC } from "react"
import { useLanguageContext } from "../context/languageContext"
import { useLocation } from "@reach/router"
import { naviateToLang } from "../utils/navigateToLang"

const options = [
  {
    value: "en",
    label: "🇬🇧 EN",
  },
  {
    value: "fr",
    label: "🇫🇷 FR",
  },
]

export const LanguageSwitcher: FC = () => {
  const { selectedLang: currLang, changeLang } = useLanguageContext()
  const { pathname } = useLocation()
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value as Languages
    changeLang(selectedLang)
    naviateToLang(currLang, selectedLang, pathname)
  }
  return (
    <div>
      <select
        onChange={handleChange}
        name="language-switcher"
        id="language-switcher"
        className="p-1"
      >
        {options.map((o, i) => (
          <option key={i} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}
