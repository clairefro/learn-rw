import { PageProps } from "gatsby"
import React, { FC } from "react"
import { useLanguageContext } from "../context/languageContext"

const Home: FC<PageProps> = props => {
  const { selectedLang: l } = useLanguageContext()

  return <div>{t.hello[l]}</div>
}

const t: Translation = {
  hello: {
    en: "Hello world!",
    fr: "Bonjour tout le monde!",
  },
}

export default Home
