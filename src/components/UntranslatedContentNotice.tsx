import React, { FC } from "react"
import { ExternalLink } from "./ExternalLink"

interface Props {
  lang: Languages
}

// TODO: update github repo link
export const UntranslatedContentNotice: FC<Props> = ({ lang = "en" }) => {
  return (
    <div className="w-full p-6 bg-red-200">
      {t.message[lang]}{" "}
      <ExternalLink href="https://github.com/clairefro/learn-rw#readme">
        <strong>Github</strong>
      </ExternalLink>
    </div>
  )
}

const t = {
  message: {
    en: "This content is not translated yet! Help us translate here: ",
    fr: "Ce contenu n'est pas encore traduit! Aidez-nous à traduire ici: ",
  },
}
