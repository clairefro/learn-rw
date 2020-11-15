import React, { createContext, useContext, useState } from "react"

interface LanguageContextState {
  selectedLang: string
  changeLang: (lang: Languages) => void
}

const defaultState: LanguageContextState = {
  selectedLang: "en",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeLang: (lang: Languages) => {},
}
const LanguageContext = createContext<LanguageContextState>(defaultState)

// TODO: better typing
/* eslint-disable @typescript-eslint/no-explicit-any */
export const LanguageContextProvider: any = ({ children }: any): any => {
  const [selectedLang, setSelectedLang] = useState<Languages>("en")

  return (
    <LanguageContext.Provider
      value={{
        selectedLang,
        changeLang: (lang: Languages) => setSelectedLang(lang),
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// TODO: better typing
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useLanguageContext = (): any => useContext(LanguageContext)
