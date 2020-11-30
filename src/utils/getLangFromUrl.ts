import { useLocation } from "@reach/router"
import { config } from "../../config"

// TODO: set "/" to redirect to "/en"
export const getLangFromUrl = (): Languages => {
  const { pathname } = useLocation()
  const match = pathname.match(/^\/(\w+)\//)
  return match ? (match[1] as Languages) : (config.defaultLang as Languages)
}
