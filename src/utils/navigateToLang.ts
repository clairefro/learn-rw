// ex:  /en/tutorial/welcome-to-redwood => /fr/tutorial/welcome-to-redwood
import { navigate } from "gatsby"
export const naviateToLang = (
  currentLang: Languages,
  selectedLang: Languages,
  currentPath: string
): void => {
  // do nothing if already on page of selected lang
  if (selectedLang === currentLang) return
  // otherwise, redirect to path of selected lang
  const targetPath = currentPath.replace(
    /^\/\w+\//,
    ["/", selectedLang, "/"].join("")
  )

  navigate(targetPath)
}
