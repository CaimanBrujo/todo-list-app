import { useEffect, useState, type ReactNode } from 'react'
import { LayoutContext } from './useLayoutContext'

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isNowMobile = window.innerWidth < 768
      setIsMobile(isNowMobile)
      setIsSidebarOpen(!isNowMobile)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const openSidebar = () => setIsSidebarOpen(true)
  const closeSidebar = () => setIsSidebarOpen(false)
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev)

  return (
    <LayoutContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        toggleSidebar,
        isMobile
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
