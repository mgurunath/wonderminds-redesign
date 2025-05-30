"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    const currentPath = pathname
    const previousPath = previousPathname.current

    if (currentPath === previousPath) {
      // Same page navigation - smooth scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    } else {
      // Different page navigation - instant scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    }

    // Update the previous pathname
    previousPathname.current = currentPath
  }, [pathname])

  return null
}
