import React, { FC } from "react"
import { useLanguageContext } from "../context/languageContext"

const options = [
  {
    value: "en",
    label: "EN",
  },
  {
    value: "fr",
    label: "FR",
  },
]

export const LanguageSwitcher: FC = () => {
  const { changeLang } = useLanguageContext()
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLang(e.target.value as Languages)
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
