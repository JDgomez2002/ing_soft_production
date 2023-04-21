import { useEffect, useState } from 'react'

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    // Define function to update scrollPosition with current scroll position with DOM js function
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }

    // Add scroll event listener and then call updatePosition function to initialize scrollPosition
    window.addEventListener('scroll', updatePosition)
    updatePosition()

    // Remove the event to prevent memory leaks
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}
