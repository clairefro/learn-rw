import React, { FC } from "react"
import { useLanguageContext } from "../context/languageContext"

const options = [
  {
    value: "fr",
    label: "FR",
  },
  {
    value: "en",
    label: "EN",
  },
]

export const LanguageSwitcher: FC = () => {
  const { changeLang } = useLanguageContext()
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLang(e.target.value)
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
