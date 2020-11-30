import React, { FC, useEffect } from "react"
import { useLanguageContext } from "../context/languageContext"
import { useLocation } from "@reach/router"
import { naviateToLang } from "../utils/navigateToLang"
import { getLangFromUrl } from "../utils/getLangFromUrl"
import { config } from "../../config"

// Note: lang values must match language codes defined in published languages
const options: { value: Languages; label: string }[] = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "fr",
    label: "Français",
  },
]

const publishedOptions = options.filter(o =>
  config.publishableLangs.includes(o.value)
)

export const LanguageSwitcher: FC = () => {
  const { selectedLang: currLang, changeLang } = useLanguageContext()
  const { pathname } = useLocation()

  const langFromUrl = getLangFromUrl()

  // on mount set to lang to url lang
  useEffect(() => {
    if (currLang !== langFromUrl) {
      changeLang(langFromUrl)
    }
  }, [])

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
        defaultValue={langFromUrl}
      >
        {publishedOptions.map((o, i) => (
          <option key={i} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}
