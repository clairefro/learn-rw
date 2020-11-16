import { useLocation } from "@reach/router"

// TODO: set "/" to redirect to "/en"
export const getLangFromUrl = (): Languages => {
  const { pathname } = useLocation()
  const match = pathname.match(/^\/(\w+)\//)
  return match ? (match[1] as Languages) : "en"
}
