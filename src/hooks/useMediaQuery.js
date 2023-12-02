import { useEffect, useState } from "react"

export const useMediaQuery = query => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches)

  useEffect(() => {
    const cb = () => {
      setMatches(window.matchMedia(query).matches)
    }

    window.addEventListener('resize', cb)

    return () => window.removeEventListener('resize', cb)
  }, [])

  return matches
}
