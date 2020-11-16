import React, { FC } from "react"
import { Helmet } from "react-helmet-async"
import { getLangFromUrl } from "../utils/getLangFromUrl"

interface Props {
  lang?: Languages
  title?: string
  titleTemplate?: string
}
export const SEO: FC<Props> = ({ lang, title, titleTemplate }) => {
  const defaults = {
    title: "A children's story",
    lang: getLangFromUrl(),
    titleTemplate: "%s | Learn RedwoodJS",
  }
  const seo = {
    title: title || defaults.title,
    titleTemplate: titleTemplate || defaults.titleTemplate,
    lang: lang || defaults.lang,
  }
  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <html lang={seo.lang} />
    </Helmet>
  )
}
